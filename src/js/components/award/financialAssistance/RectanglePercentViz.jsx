/**
 * RectanglePercentViz -> RectanglePercentViz.jsx
 * Created by Jonathan Hill 04/09/20
 **/

import React from 'react';
import PropTypes from 'prop-types';
import { TooltipWrapper } from "data-transparency-ui";

import { useTooltips } from "../shared/awardAmountsSection/charts/AwardAmountsChart";
import { generatePercentage } from 'helpers/awardAmountHelper';

const shape = PropTypes.shape({
    rawValue: PropTypes.number,
    value: PropTypes.string,
    text: PropTypes.string
});

const propTypes = {
    numerator: shape,
    denominator: shape,
    percentage: PropTypes.string,
    numeratorTooltipData: PropTypes.shape({
        offsetAdjustments: PropTypes.object,
        tooltipComponent: PropTypes.element
    }),
    denominatorTooltipData: PropTypes.shape({
        offsetAdjustments: PropTypes.object,
        tooltipComponent: PropTypes.element
    })
};

const RectanglePercentViz = ({
    numerator,
    denominator,
    percentage,
    numeratorTooltipData,
    denominatorTooltipData
}) => {
    const [
        activeTooltip,
        closeTooltip,
        showNumeratorTooltip,
        showDenominatorTooltip
    ] = useTooltips(['numerator', 'denominator']);

    const buildTooltipProps = (tooltipData, isVisible, showTooltip) => ({
        ...tooltipData,
        wide: false,
        controlledProps: {
            isControlled: true,
            isVisible,
            showTooltip,
            closeTooltip
        }
    });

    const numeratorIsZero = (numerator.rawValue === 0);
    const percent = percentage || generatePercentage(numerator.rawValue / denominator.rawValue);

    const subsidyBarAndLabelStyles = {
        width: percent,
        backgroundColor: '#F5A623'
    };

    const faceValueColor = "#FFF";

    const numeratorTooltipProps = buildTooltipProps(numeratorTooltipData, (activeTooltip === 'numerator'), showNumeratorTooltip);
    const denominatorTooltipProps = buildTooltipProps(denominatorTooltipData, (activeTooltip === 'denominator'), showDenominatorTooltip);
    const numeratorValue = percentage ? `${numerator.value} (${percent})` : numerator.value;
    return (
        <div className="award-amounts-viz">
            {!numeratorIsZero && <>
                <div
                    className="award-amounts-viz__desc-top--loans"
                    role="button"
                    tabIndex="0"
                    onBlur={closeTooltip}
                    onFocus={showNumeratorTooltip}
                    onKeyPress={showNumeratorTooltip}
                    onMouseEnter={showNumeratorTooltip}
                    onMouseLeave={closeTooltip}
                    onClick={showNumeratorTooltip}>
                    <strong>{numeratorValue}</strong><br />{numerator.text}
                </div>
                <div className="award-amounts-viz__label" style={subsidyBarAndLabelStyles}>
                    <div className="award-amounts-viz__line-up--loans" />
                </div>
            </>}
            {numeratorIsZero &&
                <TooltipWrapper {...numeratorTooltipProps} styles={{ width: '160px' }}>
                    <div className="award-amounts-viz__desc-top--loans" role="button" tabIndex="0">
                        <strong>{numerator.value}</strong>
                        <span>Total Funding From This CFDA Program</span>
                    </div>
                </TooltipWrapper>
            }
            <div className="award-amounts-viz__bar-wrapper">
                <TooltipWrapper
                    {...denominatorTooltipProps}
                    styles={{ backgroundColor: faceValueColor }}>
                    <div
                        className="award-amounts-viz__bar"
                        style={{ backgroundColor: faceValueColor, width: '100%' }}>
                        {!numeratorIsZero &&
                        <TooltipWrapper
                            {...numeratorTooltipProps}
                            styles={{ width: subsidyBarAndLabelStyles.width }}>
                            <div
                                className="award-amounts-viz__obligated--grants"
                                style={{
                                    width: '100%',
                                    backgroundColor: subsidyBarAndLabelStyles.backgroundColor }} />
                        </TooltipWrapper>
                        }
                        {numeratorIsZero && <div className="award-amounts-viz__obligated--grants" style={subsidyBarAndLabelStyles} />}
                    </div>
                </TooltipWrapper>
            </div>
            <div className="award-amounts-viz__label">
                <div className="award-amounts-viz__line" style={{ backgroundColor: faceValueColor }} />
                <div className="award-amounts-viz__desc">
                    <div
                        className="award-amounts-viz__desc-text"
                        role="button"
                        tabIndex="0"
                        onBlur={closeTooltip}
                        onFocus={showDenominatorTooltip}
                        onKeyPress={showDenominatorTooltip}
                        onMouseEnter={showDenominatorTooltip}
                        onMouseLeave={closeTooltip}
                        onClick={showDenominatorTooltip}>
                        <strong>{denominator.value}</strong><br />{denominator.text}
                    </div>
                    <div className="award-amounts-viz__legend-line award-amounts-viz__legend-line_potential" style={{ backgroundColor: faceValueColor }} />
                </div>
            </div>
        </div>
    );
};

export default RectanglePercentViz;
RectanglePercentViz.propTypes = propTypes;
