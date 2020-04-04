import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
    useEffect(() => {
        navigate('/home');
    }, []);
    return null;
};

// export default () => (
//     <Layout>
//         <div>
//             <h1>EnableHR API Documentation</h1>
//             <div>EnableHR can be integrated with many environments and programming languages via our REST API. Some of our users have contributed their API wrappers in various programming languages.</div>
//         </div>
//         <div className="mt-4">
//             <h2>Overview</h2>
//             <div>
//                 <p>The EnableHR API allows you to interact with our system programmatically from your own application. Using the API you interact with resources such as:</p>
//                 <ul>
//                     <li><Link to="/docs/pets/read-pet">Pets</Link> (reference: <a href="https://petstore.swagger.io/" target="_blank" rel="noopener noreferrer">Swagger UI</a>)</li>
//                     <li><Link to="/docs/jsonplaceholder/read-post">Posts</Link> (reference: <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a>)</li>
//                 </ul>
//             </div>
//         </div>
//         <div className="mt-4">
//             <h2>Demo</h2>
//             <div>
//                 <ul>
//                     <li>Go to <Link to="/docs/pets/read-pet">Read Pet</Link></li>
//                     <li>Click the "GET" button</li>
//                     <li>Click "Try it out", and enter 2 in <code>petId</code> for example</li>
//                     <li>Lastly click "Execute" to send request</li>
//                 </ul>
//             </div>
//         </div>
//         <div className="mt-4">
//             <h2>Technologies</h2>
//             <div>
//                 <ul>
//                     <li><b>Gatsby</b> - an html generator.</li>
//                     <li><b>React</b> - Gatsby is based on React.</li>
//                     <li><b>Markdown</b> - to write plain text, also able to include React components.</li>
//                     <li><b>Swagger UI</b> - an API documentation tool.</li>
//                     <li><b>GraphQL</b> - Gatsby already includes this tool, but it is not widely used in this project yet.</li>
//                 </ul>
//             </div>
//         </div>
//         <div className="mt-4">
//             <h2>Github</h2>
//             <div>
//                 <a href="https://github.com/beckzayi/hello-gatsby" target="_blank" rel="noopener noreferrer">https://github.com/beckzayi/hello-gatsby</a>
//             </div>
//         </div>
//     </Layout>
// );
