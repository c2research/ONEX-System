var React = require('react');
var InsightActions = require('./../../flux/actions/InsightActions');
var InsightConstants = require('./../../flux/constants/InsightConstants');
var AnnotatedSlider = require('./../AnnotatedSlider');

var resizeId;

/**
 * This is for the start and end
 * TODO: implement
 */
var InsightSimilarityQueryOptions = React.createClass({
   render: function() {

     var startSliderJSX =
     <div className="panel" >
        <h4> Select a starting data point </h4>
        <div className="options">
          <AnnotatedSlider
            value={this.props.qStart}
            min={0}
            max={this.props.qValuesLength - 1}
            realMax={this.props.qEnd}
            step={1}
            onChange={this._handleClickStart}/>
         </div>
     </div>;
     var endSliderJSX =
     <div className="panel">
        <h4> Select the end data point </h4>
        <div className="options">
          <AnnotatedSlider
            value={this.props.qEnd}
            min={0}
            realMin={this.props.qStart}
            max={this.props.qValuesLength - 1}
            step={1}
            onChange={this._handleClickEnd}/>
         </div>
     </div>;

     var queryOptionsJSX = this.props.qValuesLength > 0 ?
     <div id="optionsContainer">
      {startSliderJSX}
      {endSliderJSX}
     </div> : null;

     return queryOptionsJSX;
   },
   _handleClickStart: function(e){
     resizeId = setTimeout(this._onResizeStartAction(e), 75);
   },
   _handleClickEnd: function(e){
     resizeId = setTimeout(this._onResizeEndAction(e), 75);
   },
   /**
    * fire event when start is chosen!
    */
   _onResizeStartAction: function(e){
     InsightActions.selectSimilarityStartQ(parseInt(e.target.value, 10));
   },
   /**
    * fire event when end is chosen!
    */
   _onResizeEndAction: function(e){
     InsightActions.selectSimilarityEndQ(parseInt(e.target.value, 10));
   }
});

module.exports = InsightSimilarityQueryOptions;
