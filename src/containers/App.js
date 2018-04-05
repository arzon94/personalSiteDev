import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Tableau from '../components/Tableau';
import TableauGrad from '../components/TableauGraduate';
import Statistics from '../components/Statistics';
import {startTime} from '../index';
import LazyHero from 'react-lazy-hero';
import {Element} from 'react-scroll'
// import img from '../assets/campusMap.jpg'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render() {
    const {projects, benchmark, personalInfo} = this.props;
    const projectEntries = projects.map((project, index) => {
      return <Project key={index} project={project}/>;
    });
    const images = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));

    // we can use ES6's object destructuring to effectively 'unpack' our props
    return (
    // <div className="main-app-container">
    <div>
      <Header personalInfo={personalInfo}/>

      <Hero></Hero>
      {/* ... */}
      {/* <img src={img} /> */}
      <Statistics benchmark={benchmark}/>
      <Element name="test1" className="element">
        test 1
      </Element>
      <div className="main-app-nav" ref="scrollToContent">Selected Projects</div>

      {/* notice that we then pass those unpacked props into the Counter component */}
      {projectEntries}
      <Tableau></Tableau>
      <TableauGrad></TableauGrad>
      <Footer personalInfo={personalInfo}/>

    </div>);
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {projects: state.projects, benchmark: state.benchmark, personalInfo: state.personalInfo};
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}
function importAll(r) {
  console.log("importing images")
  return r.keys().map(r);
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(mapStateToProps, mapDispatchToProps)(App);
