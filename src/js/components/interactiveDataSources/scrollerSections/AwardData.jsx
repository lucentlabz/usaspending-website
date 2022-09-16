import React, { useRef } from 'react';
import Scroller from "../scroller/Scroller";
import ScrollerOverlay from "../scroller/scrollerOverlay/ScrollerOverlay";
import LottieAnimation from '../lottieAnimation/LottieAnimation';
import ScrollerOverlayCard from '../scroller/scrollerOverlay/ScrollerOverlayCard';
import GlossaryLink from '../../sharedComponents/GlossaryLink';

function AwardData() {
    const cards = {
        card1: {
            heading: <p>File C</p>,
            content: (
                <p>
                File C (“Account Breakdown by Award”) is part of the package of data
                submitted to USAspending by federal agencies, as required by the
                DATA Act. It contains obligation and outlay data for all awards
                issued by that agency, covering both contract and financial
                assistance awards over the lifetime of those awards. These spending
                amounts represent a subset of the account-level spending in File B.
                </p>
            )
        },
        card2: {
            heading: <p>FABS (File D2)</p>,
            content: (
                <>
                    <p>
                    The Financial Assistance Broker Submission (FABS) is how federal agencies submit{" "}
                        <span className="glossary-term">transaction-level</span>{" "}
                        <GlossaryLink term="transaction" /> data for{" "}
                        <span className="glossary-term">financial assistance</span>{" "}
                        <GlossaryLink term="financial-assistance" /> awards to USAspending. It contains information about award transaction obligation,{" "}
                        <span className="glossary-term">action date</span>{" "}
                        <GlossaryLink term="action-date" />,{" "}
                        <span className="glossary-term">awarding agency</span>{" "}
                        <GlossaryLink term="awarding-agency" />,{" "}
                        <span className="glossary-term">recipient location</span>{" "}
                        <GlossaryLink term="recipient-location" />,{" "}
                        <span className="glossary-term">place of performance</span>{" "}
                        <GlossaryLink term="primary-place-of-performance" />, and {" "}
                        <span className="glossary-term">assistance listing</span>{" "}
                        <GlossaryLink term="assistance-listing" />, among other details.
                    </p>
                    <p>The collection of data in FABS is known as File D2.</p>
                </>
            )
        },
        card3: {
            heading: <p>FPDS (File D1)</p>,
            content: (
                <>
                    <p>
                    The Federal Procurement Data System is the database where federal
                    contracting officials submit{" "}
                        <span className="glossary-term">transaction-level</span>{" "}
                        <GlossaryLink term="transaction" /> data for{" "}
                        <span className="glossary-term">contracts</span>{" "}
                        <GlossaryLink term="contract" /> and contract{" "}
                        <span className="glossary-term">
                        indefinite delivery vehicles (IDV)
                        </span>{" "}
                        <GlossaryLink term="indefinite-delivery-vehicle-idv" />. It contains information about award
                        transaction obligation,{" "}
                        <span className="glossary-term">action date</span>{" "}
                        <GlossaryLink term="action-date" />,{" "}
                        <span className="glossary-term">awarding agency</span>{" "}
                        <GlossaryLink term="awarding-agency" />,{" "}
                        <span className="glossary-term">recipient location</span>{" "}
                        <GlossaryLink term="recipient-location" />,{" "}
                        <span className="glossary-term">place of performance</span>{" "}
                        <GlossaryLink term="primary-place-of-performance" />,{" "}
                        <span className="glossary-term">industry</span>{" "}
                        <GlossaryLink term="naics" />,{" "}
                        <span className="glossary-term">product of service</span>{" "}
                        <GlossaryLink term="product-or-service-code-psc" />, and type of{" "}
                        <span className="glossary-term">set aside</span>{" "}
                        <GlossaryLink term="set-aside-type" />, among other details.
                    </p>
                    <p>The collection of data in FPDS that USAspending receives is known as File D1.</p>
                </>
            )
        },
        card4: {
            heading: <p>Linked Awards</p>,
            content: (
                <>
                    <p>
                    Whereas File C provides data over the lifetime of individual awards
                    from agency financial systems, Files D1 and D2 provide data from{" "}
                        <span className="glossary-term">award transactions</span>{" "}
                        <GlossaryLink term="transaction" /> in governmentwide award systems.
                    USAspending links these two sources of award data. However, due to
                    different policies and reporting requirements for these separate
                    systems, not all award data can be linked across both sources.
                    </p>
                    <p>
                    You can see statistics about unlinked contract awards and unlinked
                    assistance awards in the{" "}
                        <a
                            className="scroller-overlay-card__link"
                            href="https://www.usaspending.gov/submission-statistics"
                            target="_blank"
                            rel="noopener noreferrer">
                        Agency Submission Statistics page
                        </a>
                    . More information about linked awards is available in the{" "}
                        <a
                            className="scroller-overlay-card__link"
                            href="https://www.usaspending.gov/submission-statistics/data-sources"
                            target="_blank"
                            rel="noopener noreferrer">
                        Data Sources and Methodology page
                        </a>{" "}
                    for these statistics.
                    </p>
                </>
            )
        },
        card5: {
            heading: <p>FSRS (File F)</p>,
            content: (
                <p>
                    TBD: FSRS, subaward data
                </p>
            )
        },
        card6: {
            heading: <p>SAM.gov (File E)</p>,
            content: (
                <p>
                    - - - - TBD - - -
                </p>
            )
        },
    };
    const ref1 = useRef();
    const ref2 = useRef();
    return (
        <Scroller>

            {/* SCROLLER BACKDROPS */}
            <div name="animation" className="position position--center">
                <div className="top-animation">
                    <LottieAnimation
                        isScrollerBackdrop
                        ref={ref1}
                        src="/img/interactive-data-sources/5_DS_AWARD.json" />
                </div>
                <div className="bottom-animation">
                    <LottieAnimation
                        loop
                        ref={ref2}
                        src="/img/interactive-data-sources/5_DS_AWARD_BG.json" />
                </div>
            </div>


            {/* SCROLLER OVERLAYS */}

            {/* TRANSITION TO START SECTION */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(0, 120, 1.5);
                    ref2.current?.playAnimation(120, 300, 1);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>


            {/* FILE C */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(120, 180, 1.5);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(180, 240, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card1.heading}
                        content={cards.card1.content} />
                </div>
            </ScrollerOverlay>


            {/* FABS */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(240, 300, 1.5);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(300, 360, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card2.heading}
                        content={cards.card2.content} />
                </div>
            </ScrollerOverlay>


            {/* FPDS */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(360, 420, 1.5);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(420, 480, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card3.heading}
                        content={cards.card3.content} />
                </div>
            </ScrollerOverlay>


            {/* Linked Awards */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(480, 540, 1);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(540, 600, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card4.heading}
                        content={cards.card4.content} />
                </div>
            </ScrollerOverlay>

            {/* FSRS File F */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(600, 660, 1);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(660, 720, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card5.heading}
                        content={cards.card5.content} />
                </div>
            </ScrollerOverlay>


            {/* SAM */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(720, 780, 1.5);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
            <ScrollerOverlay
                content="animation"
                position="right"
                onStepEnter={() =>
                    ref1.current?.playAnimation(780, 840, 1)
                }>
                <div className="scroller-overlay-card-container">
                    <ScrollerOverlayCard
                        heading={cards.card6.heading}
                        content={cards.card6.content} />
                </div>
            </ScrollerOverlay>

            {/* TRANSITION TO END SECTION */}
            <ScrollerOverlay
                content="animation"
                onStepEnter={() => {
                    ref1.current?.playAnimation(840, 900, 1.5);
                }
                }>
                {/* used as transition. no card. */}
            </ScrollerOverlay>
        </Scroller>
    );
}

export default AwardData;
