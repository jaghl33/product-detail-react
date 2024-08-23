import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/BreadcrumbsNav.scss';

function BreadcrumbsNav({ breadcrumbs }) {
  const [showFullBreadcrumbs, setShowFullBreadcrumbs] = useState(false);
  const breadcrumbsItemsToShow = 2;

  const firstGroupBreadcrumbItems = showFullBreadcrumbs
    ? breadcrumbs.slice(0, -breadcrumbsItemsToShow)
    : [];

  const secondGroupBreadcrumbItems = breadcrumbs.slice(-breadcrumbsItemsToShow);

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div aria-live="polite" className="visually-hidden">
        Breadcrumbs {showFullBreadcrumbs ? 'expanded' : 'collapsed'}.
      </div>
      <ul>
        {breadcrumbs.length > breadcrumbsItemsToShow && !showFullBreadcrumbs && (
          <li
            key="breadcrumbs-ellipsis"
            className="breadcrumbs__item breadcrumbs__item--ellipsis"
          >
            <button
              aria-expanded={showFullBreadcrumbs.toString()}
              onClick={() => setShowFullBreadcrumbs(!showFullBreadcrumbs)}
              aria-label="Show more breadcrumbs"
            >
              . . .
            </button>
          </li>
        )}
        {showFullBreadcrumbs && firstGroupBreadcrumbItems.map((breadcrumbItem, index) => (
          <li
            key={`${breadcrumbItem.canonical} ${index}`}
            className={`breadcrumbs__item ${index === breadcrumbs.length - 1 ? 'breadcrumbs__item--active' : ''}`}
          >
            <a href={breadcrumbItem.item.url}>{breadcrumbItem.item.name}</a>
          </li>
        ))}
        {secondGroupBreadcrumbItems.map((breadcrumbItem, index) => (
          <li
            key={`${breadcrumbItem.canonical} ${index}`}
            className={`breadcrumbs__item ${index === secondGroupBreadcrumbItems.length - 1 ? 'breadcrumbs__item--active' : ''}`}
          >
            <a href={breadcrumbItem.item.url}>{breadcrumbItem.item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

BreadcrumbsNav.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default BreadcrumbsNav;
