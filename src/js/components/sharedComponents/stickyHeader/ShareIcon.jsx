import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Picker } from "data-transparency-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import {
    socialShareOptions,
    getSocialShareFn,
    getBaseUrl,
    getBaseUrlNoHash
} from 'helpers/socialShare';
import Analytics from 'helpers/analytics/Analytics';

const propTypes = {
    slug: PropTypes.string,
    email: PropTypes.shape({
        subject: PropTypes.string,
        body: PropTypes.string
    }),
    noHash: PropTypes.bool
};

const ShareIcon = ({
    slug,
    email: { subject, body },
    noHash
}) => {
    const [showConfirmationText, setConfirmationText] = useState(false);
    const hideConfirmationText = debounce(() => setConfirmationText(false), 1750);

    useEffect(() => {
        if (showConfirmationText) {
            hideConfirmationText();
        }
        return hideConfirmationText.cancel;
    }, [showConfirmationText, setConfirmationText, hideConfirmationText]);

    const getCopyFn = () => {
        document.getElementById('slug').select();
        document.execCommand("copy");
        setConfirmationText(true);
        Analytics.event({ category: slug, action: 'copied link' });
    };

    const handleShareClick = () => {
        Analytics.event({ category: slug, action: 'share options click' });
    };

    const socialSharePickerOptions = socialShareOptions.map((option) => {
        if (option.name === 'copy') {
            return {
                ...option,
                onClick: getCopyFn
            };
        }
        if (option.name === 'email') {
            const onClick = getSocialShareFn(option.name, noHash).bind(null, {
                subject,
                body
            });
            return {
                ...option,
                onClick
            };
        }
        return {
            ...option,
            onClick: getSocialShareFn(option.name, noHash).bind(null, slug)
        };
    });

    return (
        <div className="sticky-header__toolbar-item">
            <input
                id="slug"
                type="text"
                className="text"
                style={{ position: 'absolute', right: '9999px', opacity: 0 }}
                value={noHash ? getBaseUrlNoHash(slug) : getBaseUrl(slug)}
                readOnly />
            <Picker
                dropdownDirection="left"
                options={socialSharePickerOptions}
                selectedOption="copy"
                backgroundColor="#4A4A4A"
                sortFn={() => 1}>
                <FontAwesomeIcon onClick={handleShareClick} icon="share-alt" size="lg" />
            </Picker>
            <span>Share</span>
            {showConfirmationText && (
                <span className="copy-confirmation">
                    <FontAwesomeIcon icon="check-circle" color="#3A8250" /> Copied!
                </span>
            )}
        </div>
    );
};

ShareIcon.propTypes = propTypes;

export default ShareIcon;
