var React = require('react');
var ReactDOM = require('react-dom');

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <TimeContainer />
        <DistanceContainer />
        <PaceContainer />
        <CtaContainer />
      </div>
    );
  }
}

class TimeContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      h: "00",
      m: "00",
      s: "00"
    };
  }

  render() {
    return(
      <section className="TimeContainer">
        <h2>{this.state.h}:{this.state.m}:{this.state.m}</h2>
        <span>time</span>
      </section>
    );
  }
}

class DistanceContainer extends React.Component {
  constructor(props){
  super(props);

    this.state = {
      k: "0",
      m: "00"
    };
}

  render() {
    return (
     <section className="DistanceContainer">
       <h2>{this.state.k}.{this.state.m}</h2>
       <span>kilometers</span>
     </section>
    );
  }
}

class PaceContainer extends React.Component {
  constructor(props){
  super(props);

    this.state = {
      m: "0",
      s: "00"
    };
}

  render() {
    return (
     <section className="PaceContainer">
       <div className="currentPace">
         <h2>{this.state.m}.{this.state.s}</h2>
         <span>current pace</span>
       </div>
       <div className="avgPace">
         <h2>{this.state.m}.{this.state.s}</h2>
         <span>avg pace</span>
       </div>
     </section>
    );
  }
}

class CtaContainer extends React.Component{
  render(){
    return (
      <section className="CtaContainer">
        <div className="play">
          <button type="button">
            <i className="fa fa-lg fa-play-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="stop">
          <button type="button">
          <i className="fa fa-lg fa-stop-circle" aria-hidden="true"></i>
          </button>
        </div>
      </section>
    )
  }
}

ReactDOM.render(<MainContainer />, document.getElementById('app'));
