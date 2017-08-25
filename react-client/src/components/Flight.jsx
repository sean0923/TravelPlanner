import React from 'react';

const Flight = (props) => {
  var getTime = function(time) {
    time = time.replace(/T|\:\d\dZ/g,' ');
    time = time.slice(0, time.length - 6);
    return time;
  }

  var getDuration = function(duration) {
    var minutes = duration % 60;
    var hours = (duration - minutes) / 60;
    var time = hours.toString() + " hrs " + (minutes < 10 ? "0" : "") + minutes.toString() + ' minutes';
    return time;
  }

  var carrierLogoURL = "https://www.gstatic.com/flights/airline_logos/70px/" + props.flight.slice[0].segment[0].flight.carrier + ".png";

  return (
    <div className="itemBorder " onClick={(e) => (props.handleFlightClick(props.flight, e))}>
    <div class="overlay"></div>

      <div className="avoid-clicks logo">
        <img className="carrierLogo" src={carrierLogoURL}/> 
      </div>

      <div className="avoid-clicks originating">
        <div className="avoid-clicks"><b>Outgoing Flight:</b></div>
        <div className="avoid-clicks">
          <span className="avoid-clicks">{props.flight.slice[0].segment[0].flight.carrier}</span>
          <span className="avoid-clicks"> {props.flight.slice[0].segment[0].leg[0].origin} - {props.flight.slice[0].segment[0].leg[0].destination}</span>
          <span className="avoid-clicks"> {getDuration(props.flight.slice[0].duration)}</span>
          <div className="avoid-clicks"> Departure: {getTime(props.flight.slice[0].segment[0].leg[0].departureTime)}</div>
          <div className="avoid-clicks"> Arrival: {getTime(props.flight.slice[0].segment[0].leg[0].arrivalTime)}</div>
        </div>
      </div>

      <div className="avoid-clicks return">
        <div className="avoid-clicks"><b>Return Flight:</b></div>
        <div className="avoid-clicks">
          <span className="avoid-clicks">{props.flight.slice[1].segment[0].flight.carrier}</span>
          <span className="avoid-clicks"> {props.flight.slice[1].segment[0].leg[0].origin} - {props.flight.slice[1].segment[0].leg[0].destination}</span>
          <span className="avoid-clicks"> {getDuration(props.flight.slice[1].duration)}</span>
          <div className="avoid-clicks"> Departure: {getTime(props.flight.slice[1].segment[0].leg[0].departureTime)}</div>
          <div className="avoid-clicks"> Arrival: {getTime(props.flight.slice[1].segment[0].leg[0].arrivalTime)}</div>
        </div>
      </div>

      <div className="avoid-clicks price">
        <b>{props.flight.saleTotal.slice(0, 3)}</b><b>{props.flight.saleTotal.slice(3)} </b>
        <br></br>
        <p>per person</p>
      </div>
      
      <br></br>
      <br></br>
    </div>
  )
}

export default Flight;
