// CtaContainer
export default class CtaContainer extends React.Component{
    render(){
      return (
        <section className="CtaContainer">
          <div className="play">
            <button type="button" onClick="">
              <i className="fa fa-lg fa-play-circle" aria-hidden="true"></i>
            </button>
          </div>
          <div className="stop">
            <button type="button" onClick="">
              <i className="fa fa-lg fa-stop-circle" aria-hidden="true"></i>
            </button>
          </div>
        </section>
      )
    }
  }
