/**
 * VisualizationSection.jsx
 * Created by Lizzie Salita 10/29/21
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { levels } from './StatusOfFunds';
import StatusOfFundsChart from '../visualizations/StatusOfFundsChart';

const propTypes = {
    level: PropTypes.number.isRequired,
    setLevel: PropTypes.func,
    agencyName: PropTypes.string,
    fy: PropTypes.string,
    results: PropTypes.array,
    updateResults: PropTypes.func,
    selectedSubcomponent: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        budgetaryResources: PropTypes.string,
        obligations: PropTypes.string
    })
};

const VisualizationSection = ({
    level,
    setLevel,
    agencyName,
    fy,
    results,
    updateResults,
    selectedSubcomponent
}) => (
    <div className="status-of-funds__visualization">
        <h6>{level === 1 ? selectedSubcomponent?.name : agencyName} by <strong>{levels[level]}</strong> for FY {fy}</h6>
        <div className="status-of-funds__visualization-chart">
            <StatusOfFundsChart fy={fy} results={results} updateResults={updateResults} level={level} setLevel={setLevel} />
        </div>
    </div>
);

VisualizationSection.propTypes = propTypes;
export default VisualizationSection;
