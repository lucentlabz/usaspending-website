/**
 * FeaturedContent.jsx
 * Created by Brian Petway 08/22/22
 */

import React from 'react';
import { FlexGridCol, CardContainer, CardHero, CardBody } from 'data-transparency-ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Analytics from 'helpers/analytics/Analytics';
import ExternalLink from "../../sharedComponents/ExternalLink";

const FeaturedContent = () =>
    // TODO: new tags will have to be added for these in ga4
    // const trackFeaturedYourDataLink = () => Analytics.event({
    //     event: 'homepage_featured_content_links',
    //     category: 'Homepage',
    //     action: 'Link',
    //     label: 'your data featured content'
    // });
    // const trackFeaturedResourcesLink = () => Analytics.event({
    //     event: 'homepage_featured_content_links',
    //     category: 'Homepage',
    //     action: 'Link',
    //     label: 'fdg featured content'
    // });
    (<>
        <section className="featured-content__section">
            <div className="featured-content__heading">
                <div className="featured-content__heading--background">
                    <FontAwesomeIcon className="featured-content__heading--icon" icon="bullhorn" />
                </div>
                <span>Featured Content</span>
            </div>
            <div className="featured-content__section--flex-row">
                <FlexGridCol width={12} desktop={6} tablet={6} mobile={12}>
                    <ExternalLink isCard url="https://www.youtube.com/watch?v=c-bqfpWSSrI">
                        <CardContainer variant="outline" size="md">
                            <CardHero fill="#59B9DE" variant="expanded" img="img/homepage-featured-content/homepage-feature-Your-Data-Your-Story@2x.webp" />
                            <CardBody
                                overline="YOUR DATA, YOUR STORY"
                                headline={
                                    <div>
                                        Learn how Americans use USAspending in the “Your Data, Your Story” video series
                                    </div>
                                }>
                            </CardBody>
                        </CardContainer>
                    </ExternalLink>
                </FlexGridCol>
                <FlexGridCol width={12} desktop={6} tablet={6} mobile={12}>
                    <ExternalLink isCard url="https://fiscaldata.treasury.gov/treasury-savings-bonds/">
                        <CardContainer variant="outline" size="md">
                            <CardHero fill="#864381" variant="expanded" img="img/homepage-featured-content/homepage-feature-FDG@2x.webp" />
                            <CardBody
                                overline="PARTNER SITES"
                                headline={
                                    <div>
                                        Explore U.S. Treasury Savings Bonds on Fiscal Data
                                    </div>
                                }>
                            </CardBody>
                        </CardContainer>
                    </ExternalLink>
                </FlexGridCol>
            </div>
        </section>
    </>
    );
export default FeaturedContent;
