"use client"

import React, { useEffect, useRef, useState } from 'react'

interface GoogleMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  className?: string
  markers?: Array<{
    id: string
    lat: number
    lng: number
    title: string
    severity: 'high' | 'medium' | 'low'
    incidents: number
  }>
  onMarkerClick?: (markerId: string) => void
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  center = { lat: 12.9716, lng: 77.5946 }, // Bangalore center
  zoom = 12,
  className = '',
  markers = [],
  onMarkerClick
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#ef4444' // red-500
      case 'medium':
        return '#f97316' // orange-500
      case 'low':
        return '#22c55e' // green-500
      default:
        return '#6b7280' // gray-500
    }
  }

  const createCustomMarker = (marker: GoogleMapProps['markers'][0]) => {
    const color = getSeverityColor(marker.severity)
    
    return {
      path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
      scale: 1.5,
      anchor: new google.maps.Point(12, 24)
    }
  }

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true)
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geometry`
      script.async = true
      script.defer = true
      
      script.onload = () => {
        setIsLoaded(true)
      }
      
      script.onerror = () => {
        console.error('Failed to load Google Maps API')
      }

      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }

    loadGoogleMaps()
  }, [])

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google) return

    // Initialize map
    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ color: "#f5f5f5" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }, { weight: 6 }]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#e85113" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#e9e9e9" }, { lightness: 29 }, { weight: 0.2 }]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
        }
      ],
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
    })

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []

    // Add new markers
    markers.forEach(marker => {
      const mapMarker = new google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: mapInstanceRef.current,
        title: `${marker.title}: ${marker.incidents} incidents`,
        icon: createCustomMarker(marker)
      })

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; font-family: system-ui;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${marker.title}</h3>
            <p style="margin: 0 0 4px 0; font-size: 14px;">Incidents: <strong>${marker.incidents}</strong></p>
            <p style="margin: 0; font-size: 14px;">Severity: <span style="color: ${getSeverityColor(marker.severity)}; font-weight: 600; text-transform: capitalize;">${marker.severity}</span></p>
          </div>
        `
      })

      mapMarker.addListener('click', () => {
        // Close any open info windows
        markersRef.current.forEach(m => {
          if ((m as any).infoWindow) {
            (m as any).infoWindow.close()
          }
        })
        
        infoWindow.open(mapInstanceRef.current, mapMarker)
        onMarkerClick?.(marker.id)
      })

      // Store info window reference
      ;(mapMarker as any).infoWindow = infoWindow
      markersRef.current.push(mapMarker)
    })

  }, [isLoaded, center, zoom, markers, onMarkerClick])

  if (!isLoaded) {
    return (
      <div className={`bg-muted/20 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return <div ref={mapRef} className={className} />
}

export default GoogleMap