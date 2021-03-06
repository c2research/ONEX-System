var React = require('react');

/**
 * The title and banner across the top of the application, (initially just a title)
 */
var InsightBanner = React.createClass({
   render: function() {
     var title = this.props.baseTitle;
     var style = {
       icon: {
         position: 'absolute',
         right: '50%',
         height: 50,
         width: 50,
         paddingTop: 15,
         paddingRight: 5
       },
       title: {
           textAlign: 'center',
           fontSize: '3em',
           color: 'white',
           fontWeight: 'lighter',
           borderBottom: 'none',
           margin: 0
        },
        wrapper: {
          overflow: 'hidden'
        },
        float: {
          float: 'left',
          width: '50%'
        },
        floatR: {
          float: 'right',
          width: '50%',
          right: 0
        }

     }

     return (
       <div className="insightBanner">
         <h1 style={style.title}>
           {title}
         </h1>
       </div>
      );
   }
});

module.exports = InsightBanner;
