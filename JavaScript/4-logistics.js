'use strict';

class TrackingEvent {
  constructor(type, timestamp, location) {
    this.type = type;
    this.timestamp = timestamp;
    this.location = location;
  }
}

class Shipment {
  #trackingEvents = [];

  constructor(trackingNumber, origin, destination) {
    this.trackingNumber = trackingNumber;
    this.origin = origin;
    this.destination = destination;
  }

  addTrackingEvent(type, location) {
    const event = new TrackingEvent(type, new Date(), location);
    this.#trackingEvents.push(event);
  }

  getTrackingHistory() {
    return [...this.#trackingEvents];
  }
}

// Usage

const shipment = new Shipment('12345ABC', 'Livorno', 'Vienna');
shipment.addTrackingEvent('Picked Up', 'Livorno');
shipment.addTrackingEvent('In Transit', 'Venezia');
shipment.addTrackingEvent('Delivered', 'Vienna');

console.log(shipment.getTrackingHistory());
