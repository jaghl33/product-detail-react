import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductImageViewer from './components/ProductImageViewer';
import BreadcrumbsNav from './components/BreadcrumbsNav';
import ProductDetails from './components/ProductDetails';
import ProductData from '../product-data.json';
import './style/App.scss';
import './style/main.scss';

const { images, breadcrumbs, title } = ProductData.product;

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BreadcrumbsNav breadcrumbs={breadcrumbs} />
        <h1 className="container__title--mobile">{title}</h1>
        <ProductImageViewer images={images} />
        <ProductDetails />
      </Provider>
    </div>
  );
}

export default App;
