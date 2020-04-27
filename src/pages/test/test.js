// import React from 'react';
// import SwaggerUI from 'swagger-ui';
// import 'swagger-ui/dist/swagger-ui.css';
// import Layout from '../../components/layout';

// // Create the layout component
// class AugmentingLayout extends React.Component {
//     render() {
//         const {
//             getComponent
//         } = this.props
    
//         const BaseLayout = getComponent("BaseLayout", true)
    
//         return (
//             <div>
//                 <div className="myCustomHeader">
//                     <h1>I have a custom header above Swagger-UI!</h1>
//                 </div>
//             <BaseLayout />
//             </div>
//         )
//     }
// }
  
//   // Create the plugin that provides our layout component
//   const AugmentingLayoutPlugin = () => {
//     return {
//         components: {
//             AugmentingLayout: AugmentingLayout
//         }
//     }
//   }

// class MyTest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             definitionLink: "https://petstore.swagger.io/v2/swagger.json",
//         }
//     }
//     componentDidMount() {
//         SwaggerUI({
//             dom_id: '#myDomId',
//             url: this.state.definitionLink,
//             deepLinking: true,
//             plugins: [ AugmentingLayoutPlugin ],
//             layout: "AugmentingLayout"
//         });
//     }

//     render() {
//         return (
//             <Layout>
//                 <div id="myDomId"></div>
//             </Layout>
//         );
//     }
// }

// export default MyTest;