'use strict';

class TrackingEvent {
  constructor(type, timestamp, location) {
    this.type = type;
    this.timestamp = timestamp;
    this.location = location;
  }
}

class Shipment {
  constructor(trackingNumber, origin, destination) {
    this.trackingNumber = trackingNumber;
    this.origin = origin;
    this.destination = destination;
    this.trackingEvents = [];
  }
}

// Usage

const shipment = new Shipment('12345ABC', 'Livorno', 'Vienna');

const event1 = new TrackingEvent('Picked Up', new Date(), 'Livorno');
shipment.trackingEvents.push(event1);

const event2 = new TrackingEvent('In Transit', new Date(), 'Venezia');
shipment.trackingEvents.push(event2);

const event3 = new TrackingEvent('Delivered', new Date(), 'Vienna');
shipment.trackingEvents.push(event3);

console.log(shipment.trackingEvents);
