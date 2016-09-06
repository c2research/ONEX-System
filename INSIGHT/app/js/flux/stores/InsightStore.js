var AppDispatcher = require('./../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var InsightConstants = require('./../constants/InsightConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var data = {
	controlPanelVisible: true,
	datasets: [],
	query: null,
	selectedDatasetIndex: -1,
	selectedDataset: null
};


var InsightStore = assign({}, EventEmitter.prototype, {
	/**
	 * emits a change event, which is registered in view controller
	 */
	emitChange: function() {
	    this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	},

	/**
	 * @param {Object} - the current representation of state data
	 */
	getStateData: function() {
		return 5;
	},

	/**
	 * @return {boolean} - if app should render the control panel
	 */
	getControlPanelVisible: function() {
		return data.controlPanelVisible;
	},

	/**
	 * @param {boolean} value - if app should render the control panel
	 */
	setControlPanelVisible: function(value) {
		data.controlPanelVisible = value;
	},

	/** talking to server with ajax calls **/
	/**
	 * @return {Object} - the array of dataset items
	 */
	getDatasetList: function() {
		$.ajax({
			url: '/_datasetlist',
			dataType: 'json',
			success: function(response) {
				data.datasetlist = response;
				this.emitChange();
			},
			error: function(xhr) {
				console.log("error in outlierUpdateChart");
			}
		});
	},

	/**
	 * @return {JSONObject} - a list of points
	 */
	getDataset: function(index) {
		$.ajax({
			url: '/_datasetlist',
			data: index,
			dataType: 'json',
			success: function(response) {
				data.selectedDataset = index;
				data.datasetlist = response;
				this.emitChange();
			},
			error: function(xhr) {
				console.log("error in outlierUpdateChart");
			}
		});
	},

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

	switch(action.actionType) {
		case InsightConstants.DISPLAY_TS:
			//doStuff()
			//InsightStore.emitChange();
			break;
		case InsightConstants.RESIZE_APP:
			//calculateDimensions()
			//InsightStore.emitChange();
			break;
		case InsightConstants.CONTROL_PANEL_VISIBLE:
			//if(InsightStore.emitChange();
		default:
		  // no op
		}
});

module.exports = InsightStore;
