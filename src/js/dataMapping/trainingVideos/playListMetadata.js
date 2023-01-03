/**
 * playListMetadata.js
 * Created by Andrea Blackwell 12/20/22
 **/

/** Pulled from URL - https://developers.google.com/youtube/v3/docs/videos/list?apix_params=%7B%22part%22%3A%5B%22snippet%2CcontentDetails%22%5D%2C%22id%22%3A%5B%22AEKL2LOkRZY%2C%208-r7aSvl8tY%2C%20apPBqcy6F1k%2C%20jYs3zq3Tvs0%2CFzl4OIjP73A%2C%20b7SDGhSZ5wM%2Cb8l-ZBhQ900%2Cb9ABwzIyCNI%2Chct0oHSGVHA%2C%20ZuvZQ33ZvAE%22%5D%7D
 * Using parts - Snippet and Content Details
 * Video IDs - AEKL2LOkRZY, 8-r7aSvl8tY, apPBqcy6F1k, jYs3zq3Tvs0,Fzl4OIjP73A, b7SDGhSZ5wM,b8l-ZBhQ900,b9ABwzIyCNI,hct0oHSGVHA, ZuvZQ33ZvAE
**/

const metaData = {
    kind: "youtube#videoListResponse",
    items: [
        {
            kind: "youtube#video",
            etag: "Bv1QrPeS_4v5kGJ81qOASl_uPXU",
            id: "AEKL2LOkRZY",
            snippet: {
                publishedAt: "2022-12-05T17:30:02Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "TUTORIAL: How to Use USAspending API Endpoints",
                description: "CHAPTERS:\n\n0:00 Welcome!\n\n0:30 Step 1: Introduction to APIs\n  •  When to use an API\n  •  What is an API\n  •  Rest API endpoints\n  •  GET and POST requests\n\n3:08 Step 2: State profile GET request\n  •  Find data on a State profile page\n  •  Use the Inspect feature in your browser to find API paths\n  •  Use the Headers tab to copy and enter the Request URL in a new tab and compare the API output to what is presented on the State profile age\n\n5:52 Step 3: Advanced Search POST request\n  •  Submit an example search in Advanced Search\n  •  Find the specific data point you are interested in\n  •  Use the Inspect feature in your browser to find the API path for that endpoint\n  •  Use the Response tab to match the data point between the API endpoint and the Advanced Search result\n  •  Use the Payload tab to match the filters between the API endpoint and the Advanced Search result\n  •  Use the Headers tab to copy and enter the Request URL in a new tab and access the API endpoint documentation (which should match the Payload tab)\n  •  Use the filter objects in the API endpoint documentation and Payload tab to write your own API calls for use in your own reports and analyses\n\n9:17 Thank you!\n\nLINKS:\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/AEKL2LOkRZY/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/AEKL2LOkRZY/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/AEKL2LOkRZY/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/AEKL2LOkRZY/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/AEKL2LOkRZY/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                categoryId: "27",
                liveBroadcastContent: "none",
                localized: {
                    title: "TUTORIAL: How to Use USAspending API Endpoints",
                    description: "CHAPTERS:\n\n0:00 Welcome!\n\n0:30 Step 1: Introduction to APIs\n  •  When to use an API\n  •  What is an API\n  •  Rest API endpoints\n  •  GET and POST requests\n\n3:08 Step 2: State profile GET request\n  •  Find data on a State profile page\n  •  Use the Inspect feature in your browser to find API paths\n  •  Use the Headers tab to copy and enter the Request URL in a new tab and compare the API output to what is presented on the State profile age\n\n5:52 Step 3: Advanced Search POST request\n  •  Submit an example search in Advanced Search\n  •  Find the specific data point you are interested in\n  •  Use the Inspect feature in your browser to find the API path for that endpoint\n  •  Use the Response tab to match the data point between the API endpoint and the Advanced Search result\n  •  Use the Payload tab to match the filters between the API endpoint and the Advanced Search result\n  •  Use the Headers tab to copy and enter the Request URL in a new tab and access the API endpoint documentation (which should match the Payload tab)\n  •  Use the filter objects in the API endpoint documentation and Payload tab to write your own API calls for use in your own reports and analyses\n\n9:17 Thank you!\n\nLINKS:\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT9M58S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "MWujZVVt-qe6XQF93w_11wW8uCo",
            id: "Fzl4OIjP73A",
            snippet: {
                publishedAt: "2022-10-17T12:00:16Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "QUICK START: How to Find Government Contracts for Small Businesses",
                description: "Are you interested in small business market research for government contracts? USAspending.gov lets you search for federal contracts by industry, location, recipient type, set-asides, and more. Learn about how to find specific contracts and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:13 Step 1: Identify top industries for small businesses\n  •  In Advanced Search, use the Award Type, Location, Recipient Type filters. Then click 'Submit Search.'\n  •  Click on the Categories tab to see top agencies, recipients, and industries (using PSC or NAICS codes) for your search.\n  •  Refine your search based on any top industries you found.\n\n2:15 Step 2: Identify federal contracts with set-asides\n  •  Refine your search using the Type of Set-Aside filter. Click 'Submit Search.'\n  •  In the Table tab, sort results to see the contracts ending soon, which may indicate an opportunity to recompete for these contracts.\n\n3:08 Step 3: Identify potential subcontract opportunities\n  •  Remove filters for set-asides and small businesses.\n  •  Use the Award Amount filter to set a minimum of $750,000. Awards above this amount are required to have a subcontracting plan.\n  •  Click 'Submit Search.' In the Table tab, sort results to see the most recent start dates. These newer contracts are more likely to have subcontract opportunities. \n\n4:20 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/Fzl4OIjP73A\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/Fzl4OIjP73A/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/Fzl4OIjP73A/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/Fzl4OIjP73A/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/Fzl4OIjP73A/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/Fzl4OIjP73A/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "fiscal service",
                    "treasury",
                    "award spending",
                    "federal award",
                    "federal contract",
                    "subcontract",
                    "small business",
                    "set aside",
                    "industry",
                    "product",
                    "service",
                    "recipient"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                localized: {
                    title: "QUICK START: How to Find Government Contracts for Small Businesses",
                    description: "Are you interested in small business market research for government contracts? USAspending.gov lets you search for federal contracts by industry, location, recipient type, set-asides, and more. Learn about how to find specific contracts and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:13 Step 1: Identify top industries for small businesses\n  •  In Advanced Search, use the Award Type, Location, Recipient Type filters. Then click 'Submit Search.'\n  •  Click on the Categories tab to see top agencies, recipients, and industries (using PSC or NAICS codes) for your search.\n  •  Refine your search based on any top industries you found.\n\n2:15 Step 2: Identify federal contracts with set-asides\n  •  Refine your search using the Type of Set-Aside filter. Click 'Submit Search.'\n  •  In the Table tab, sort results to see the contracts ending soon, which may indicate an opportunity to recompete for these contracts.\n\n3:08 Step 3: Identify potential subcontract opportunities\n  •  Remove filters for set-asides and small businesses.\n  •  Use the Award Amount filter to set a minimum of $750,000. Awards above this amount are required to have a subcontracting plan.\n  •  Click 'Submit Search.' In the Table tab, sort results to see the most recent start dates. These newer contracts are more likely to have subcontract opportunities. \n\n4:20 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/Fzl4OIjP73A\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT5M4S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "9sLC_wOxOSR_h95DDvXFMgQ9Hhg",
            id: "b8l-ZBhQ900",
            snippet: {
                publishedAt: "2022-08-15T12:30:11Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "TUTORIAL: How to Find COVID Spending and Infrastructure Spending",
                description: "Did you know that USAspending.gov tracks spending from bills addressing COVID-19 pandemic relief and infrastructure projects?  Spending from the CARES Act, American Rescue Plan Act, the Infrastructure Investment and Jobs Act, and similar bills is tracked using fund codes assigned by the Office of Management and Budget. Learn more about how to find COVID relief spending and infrastructure spending in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome, and Introduction to Disaster Emergency Fund Codes (DEFC)\n\n2:04 Step 1: Finding COVID-19 Spending or Infrastructure Spending in Advanced Search\n  •  In Advanced Search, use the DEFC filter.\n  •  Then click 'Submit Search.'\n\n3:27 Step 1 (cont.): Reviewing Results in Advanced Search\n  •  Each row in the Table shows a new or existing award that has received DEFC funding.\n  •  Scroll to the right in the Table to see columns for DEFC values, COVID-19 obligations, and COVID-19 outlays for each award.\n  •  Click on any link in the Award ID column to visit the award summary page for that award.\n  •  Click on the Subaward toggle above the Table to see subawards whose prime award has received DEFC funding. Scroll to the right to see links to prime award summary pages for each subaward.\n\n6:15 Step 1 (cont.): Downloading Results from Advanced Search\n  •  Click on the 'Download' button in the top right of the page and select the Award-level download (narrow your search results first, if necessary).\n  •  In the Prime Award Summaries files, search the column headers for COVID-19 obligations and outlays using the term \"COVID\".\n  •  Subawards files (and Transaction-level files) include reference information from the Prime Award Summaries files on COVID-19 obligations and outlays.\n\n10:02 Step 2: Finding COVID-19 Spending or Infrastructure Spending in Custom Account Data Download\n  •  In Custom Account Data Download, use the DEFC filter.\n  •  Specify the Fiscal Year (and Quarter) for your download.\n  •  Select Federal Account unless you know you want Treasury Account.\n\n11:29 Step 2 (cont.): Selecting File Type in Custom Account Data Download\n  •  Select File B if you want award and non-award spending from agencies. Download and search for the 'obligations_incurred' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n  •  Select File C if you want only award spending from agencies. Download and search for the 'transaction_obligated_amount' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n\n14:34 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/hct0oHSGVHA\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/b8l-ZBhQ900/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/b8l-ZBhQ900/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/b8l-ZBhQ900/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/b8l-ZBhQ900/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/b8l-ZBhQ900/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "award spending",
                    "federal award",
                    "subaward",
                    "prime recipient",
                    "subaward recipient",
                    "prime award",
                    "obligation",
                    "outlay",
                    "covid spending",
                    "covid relief",
                    "covid stimulus",
                    "relief bill",
                    "stimulus bill",
                    "infrastructure spending",
                    "infrastructure bill",
                    "infrastructure grant",
                    "infrastructure program",
                    "infrastructure project",
                    "infrastructure investment",
                    "pandemic spending",
                    "pandemic stimulus",
                    "pandemic relief",
                    "pandemic fund",
                    "pandemic money"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                localized: {
                    title: "TUTORIAL: How to Find COVID Spending and Infrastructure Spending",
                    description: "Did you know that USAspending.gov tracks spending from bills addressing COVID-19 pandemic relief and infrastructure projects?  Spending from the CARES Act, American Rescue Plan Act, the Infrastructure Investment and Jobs Act, and similar bills is tracked using fund codes assigned by the Office of Management and Budget. Learn more about how to find COVID relief spending and infrastructure spending in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome, and Introduction to Disaster Emergency Fund Codes (DEFC)\n\n2:04 Step 1: Finding COVID-19 Spending or Infrastructure Spending in Advanced Search\n  •  In Advanced Search, use the DEFC filter.\n  •  Then click 'Submit Search.'\n\n3:27 Step 1 (cont.): Reviewing Results in Advanced Search\n  •  Each row in the Table shows a new or existing award that has received DEFC funding.\n  •  Scroll to the right in the Table to see columns for DEFC values, COVID-19 obligations, and COVID-19 outlays for each award.\n  •  Click on any link in the Award ID column to visit the award summary page for that award.\n  •  Click on the Subaward toggle above the Table to see subawards whose prime award has received DEFC funding. Scroll to the right to see links to prime award summary pages for each subaward.\n\n6:15 Step 1 (cont.): Downloading Results from Advanced Search\n  •  Click on the 'Download' button in the top right of the page and select the Award-level download (narrow your search results first, if necessary).\n  •  In the Prime Award Summaries files, search the column headers for COVID-19 obligations and outlays using the term \"COVID\".\n  •  Subawards files (and Transaction-level files) include reference information from the Prime Award Summaries files on COVID-19 obligations and outlays.\n\n10:02 Step 2: Finding COVID-19 Spending or Infrastructure Spending in Custom Account Data Download\n  •  In Custom Account Data Download, use the DEFC filter.\n  •  Specify the Fiscal Year (and Quarter) for your download.\n  •  Select Federal Account unless you know you want Treasury Account.\n\n11:29 Step 2 (cont.): Selecting File Type in Custom Account Data Download\n  •  Select File B if you want award and non-award spending from agencies. Download and search for the 'obligations_incurred' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n  •  Select File C if you want only award spending from agencies. Download and search for the 'transaction_obligated_amount' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n\n14:34 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/hct0oHSGVHA\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT15M16S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "59KgK2tTQWaZ_aFw_AWrcccpixY",
            id: "b9ABwzIyCNI",
            snippet: {
                publishedAt: "2022-08-15T12:30:10Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "QUICK START: How to Find Government Spending to Your State",
                description: "Did you know you can track federal spending to your state, county, or congressional district? USAspending.gov is the single most complete source of spending data on federal awards and subawards such as contracts, grants, and loans. Learn more about how to track federal spending to your community in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:11 Step 1: Download your data in Advanced Search\n  •  In Advanced Search, use the Time Period filter and the Location filter. You can search by state, county, or congressional district.\n  •  Then click the Download button and select 'Transactions' and 'Everything'.\n\n2:06 Step 2: Calculate spending from prime awards\n  •  Open the Contracts Prime Transactions file and sum up the Federal Action Obligation column.\n  •  Open the Assistance Prime Transactions file and sum up the Federal Action Obligation column *and* the Original Loan Subsidy Cost column.\n\n3:15 Step 3: Calculate spending from subawards\n  •  Open the Contracts Subawards file and sum up the Subaward Amount column.\n  •  Open the Assistance Subawards file and sum up the Subaward Amount column.\n\n4:09 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/ZuvZQ33ZvAE\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/b9ABwzIyCNI/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/b9ABwzIyCNI/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/b9ABwzIyCNI/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/b9ABwzIyCNI/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/b9ABwzIyCNI/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "fiscal service",
                    "treasury",
                    "award spending",
                    "federal award",
                    "federal contract",
                    "federal loan",
                    "federal grant",
                    "congressional district",
                    "county",
                    "state",
                    "subaward",
                    "prime recipient",
                    "subaward recipient",
                    "prime award",
                    "obligation",
                    "outlay"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                defaultLanguage: "en-US",
                localized: {
                    title: "QUICK START: How to Find Government Spending to Your State",
                    description: "Did you know you can track federal spending to your state, county, or congressional district? USAspending.gov is the single most complete source of spending data on federal awards and subawards such as contracts, grants, and loans. Learn more about how to track federal spending to your community in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:11 Step 1: Download your data in Advanced Search\n  •  In Advanced Search, use the Time Period filter and the Location filter. You can search by state, county, or congressional district.\n  •  Then click the Download button and select 'Transactions' and 'Everything'.\n\n2:06 Step 2: Calculate spending from prime awards\n  •  Open the Contracts Prime Transactions file and sum up the Federal Action Obligation column.\n  •  Open the Assistance Prime Transactions file and sum up the Federal Action Obligation column *and* the Original Loan Subsidy Cost column.\n\n3:15 Step 3: Calculate spending from subawards\n  •  Open the Contracts Subawards file and sum up the Subaward Amount column.\n  •  Open the Assistance Subawards file and sum up the Subaward Amount column.\n\n4:09 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/ZuvZQ33ZvAE\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT4M57S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "tcAmONVc2VTtlhswXqZ8ReifWmg",
            id: "hct0oHSGVHA",
            snippet: {
                publishedAt: "2022-08-15T12:30:10Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "QUICK START: How to Find COVID Spending and Infrastructure Spending",
                description: "Did you know that USAspending.gov tracks spending from bills addressing COVID-19 pandemic relief and infrastructure projects?  Spending from the CARES Act, American Rescue Plan Act, the Infrastructure Investment and Jobs Act, and similar bills is tracked using fund codes assigned by the Office of Management and Budget. Learn more about how to find COVID relief spending and infrastructure spending in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome, and Introduction to Disaster Emergency Fund Codes (DEFC)\n\n1:22 Step 1: Finding COVID-19 Spending or Infrastructure Spending in Advanced Search\n  •  In Advanced Search, use the DEFC filter.\n  •  Then click 'Submit Search.'\n\n2:00 Step 1 (cont.): Reviewing Results in Advanced Search\n  •  Each row in the Table shows a new or existing award that has received DEFC funding.\n  •  Scroll to the right in the Table to see columns for DEFC values, COVID-19 obligations, and COVID-19 outlays for each award.\n  •  Click on the Subaward toggle above the Table to see subawards whose prime award has received DEFC funding.\n\n2:52 Step 1 (cont.): Downloading Results from Advanced Search\n  •  Click on the 'Download' button in the top right of the page and select the Award-level download (narrow your search results first, if necessary).\n  •  In the Prime Award Summaries files, search the column headers for COVID-19 obligations and outlays using the term \"COVID\".\n  •  Subawards files (and Transaction-level files) include reference information from the Prime Award Summaries files on COVID-19 obligations and outlays.\n\n4:57 Step 2: Finding COVID-19 Spending or Infrastructure Spending in Custom Account Data Download\n  •  In Custom Account Data Download, use the DEFC filter.\n  •  There are two options for File Types that have DEFC data. Select File B if you want award and non-award spending from agencies. Download and search for the 'obligations_incurred' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n  •  Select File C if you want only award spending from agencies. Download and search for the 'transaction_obligated_amount' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n\n6:35 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/b8l-ZBhQ900\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/hct0oHSGVHA/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/hct0oHSGVHA/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/hct0oHSGVHA/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/hct0oHSGVHA/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/hct0oHSGVHA/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "award spending",
                    "federal award",
                    "subaward",
                    "prime recipient",
                    "subaward recipient",
                    "prime award",
                    "obligation",
                    "outlay",
                    "covid spending",
                    "covid relief",
                    "covid stimulus",
                    "relief bill",
                    "stimulus bill",
                    "infrastructure spending",
                    "infrastructure bill",
                    "infrastructure grant",
                    "infrastructure program",
                    "infrastructure project",
                    "infrastructure investment",
                    "pandemic spending",
                    "pandemic stimulus",
                    "pandemic relief",
                    "pandemic fund",
                    "pandemic money"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                defaultLanguage: "en-US",
                localized: {
                    title: "QUICK START: How to Find COVID Spending and Infrastructure Spending",
                    description: "Did you know that USAspending.gov tracks spending from bills addressing COVID-19 pandemic relief and infrastructure projects?  Spending from the CARES Act, American Rescue Plan Act, the Infrastructure Investment and Jobs Act, and similar bills is tracked using fund codes assigned by the Office of Management and Budget. Learn more about how to find COVID relief spending and infrastructure spending in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome, and Introduction to Disaster Emergency Fund Codes (DEFC)\n\n1:22 Step 1: Finding COVID-19 Spending or Infrastructure Spending in Advanced Search\n  •  In Advanced Search, use the DEFC filter.\n  •  Then click 'Submit Search.'\n\n2:00 Step 1 (cont.): Reviewing Results in Advanced Search\n  •  Each row in the Table shows a new or existing award that has received DEFC funding.\n  •  Scroll to the right in the Table to see columns for DEFC values, COVID-19 obligations, and COVID-19 outlays for each award.\n  •  Click on the Subaward toggle above the Table to see subawards whose prime award has received DEFC funding.\n\n2:52 Step 1 (cont.): Downloading Results from Advanced Search\n  •  Click on the 'Download' button in the top right of the page and select the Award-level download (narrow your search results first, if necessary).\n  •  In the Prime Award Summaries files, search the column headers for COVID-19 obligations and outlays using the term \"COVID\".\n  •  Subawards files (and Transaction-level files) include reference information from the Prime Award Summaries files on COVID-19 obligations and outlays.\n\n4:57 Step 2: Finding COVID-19 Spending or Infrastructure Spending in Custom Account Data Download\n  •  In Custom Account Data Download, use the DEFC filter.\n  •  There are two options for File Types that have DEFC data. Select File B if you want award and non-award spending from agencies. Download and search for the 'obligations_incurred' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n  •  Select File C if you want only award spending from agencies. Download and search for the 'transaction_obligated_amount' column and the 'gross_outlay_amount_FYB_to_period_end' column.\n\n6:35 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/b8l-ZBhQ900\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT7M15S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "sY-6V4s9iSVTfYlu8o6nl_3OPPc",
            id: "8-r7aSvl8tY",
            snippet: {
                publishedAt: "2022-11-07T13:30:04Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "TUTORIAL: How to Find Federal Grants",
                description: "Are you researching grants awarded by the federal government to organizations such as nonprofits? USAspending.gov lets you search for federal grants by agency, location, recipient type, and more. Learn about how to find specific grants and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:05 Step 1: Using Advanced Search filters to find grants\n  •  In Advanced Search, use the Award Type, Agency, Location, Recipient, Recipient Type, and Assistance Listing (CFDA Program) filters. Then click 'Submit Search.'\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n4:55 Step 2: Reviewing search results for grants (Table tab)\n  •  Use the Table tab to see all the award summaries that match your selected filters.\n  •  Click on the links in the Award ID column to see the profile page for any individual grant. These profiles have more information about the assistance listing that authorized the grant. This information is drawn from SAM.gov and Grants.gov. \n\n6:43 Step 2: Reviewing search results for grants (Time, Map, and Categories tabs)\n  •  Use the Time tab to see how much has been spent over time.\n  •  Use the Map tab to see how much has been spent in various locations.\n  •  Use the Categories tab to see the breakdown of spending by agency, recipient, or assistance listing. You can refine your search by any of these categories.\n\n9:28 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/apPBqcy6F1k\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/8-r7aSvl8tY/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/8-r7aSvl8tY/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/8-r7aSvl8tY/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/8-r7aSvl8tY/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/8-r7aSvl8tY/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                categoryId: "27",
                liveBroadcastContent: "none",
                localized: {
                    title: "TUTORIAL: How to Find Federal Grants",
                    description: "Are you researching grants awarded by the federal government to organizations such as nonprofits? USAspending.gov lets you search for federal grants by agency, location, recipient type, and more. Learn about how to find specific grants and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:05 Step 1: Using Advanced Search filters to find grants\n  •  In Advanced Search, use the Award Type, Agency, Location, Recipient, Recipient Type, and Assistance Listing (CFDA Program) filters. Then click 'Submit Search.'\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n4:55 Step 2: Reviewing search results for grants (Table tab)\n  •  Use the Table tab to see all the award summaries that match your selected filters.\n  •  Click on the links in the Award ID column to see the profile page for any individual grant. These profiles have more information about the assistance listing that authorized the grant. This information is drawn from SAM.gov and Grants.gov. \n\n6:43 Step 2: Reviewing search results for grants (Time, Map, and Categories tabs)\n  •  Use the Time tab to see how much has been spent over time.\n  •  Use the Map tab to see how much has been spent in various locations.\n  •  Use the Categories tab to see the breakdown of spending by agency, recipient, or assistance listing. You can refine your search by any of these categories.\n\n9:28 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/apPBqcy6F1k\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT10M6S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "GG-ZMbnhSQGBwVG9XvLgb-zkYrQ",
            id: "apPBqcy6F1k",
            snippet: {
                publishedAt: "2022-11-07T13:30:03Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "QUICK START: How to Find Federal Grants",
                description: "Are you researching grants awarded by the federal government to organizations such as nonprofits? USAspending.gov lets you search for federal grants by agency, location, recipient type, and more. Learn about how to find specific grants and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n0:49 Step 1: Using Advanced Search filters to find grants\n  •  In Advanced Search, use the Award Type, Agency, Location, Recipient, Recipient Type, and Assistance Listing (CFDA Program) filters. Then click 'Submit Search.'\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n1:35 Step 2: Reviewing search results for grants (Table tab)\n  •  Use the Table tab to see all the award summaries that match your selected filters.\n  •  Use the Time tab to see how much has been spent over time.\n  •  Use the Map tab to see how much has been spent in various locations.\n  •  Use the Categories tab to see the breakdown of spending by agency, recipient, or assistance listing. You can refine your search by any of these categories.\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n2:41 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/8-r7aSvl8tY\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/apPBqcy6F1k/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/apPBqcy6F1k/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/apPBqcy6F1k/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/apPBqcy6F1k/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/apPBqcy6F1k/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                categoryId: "27",
                liveBroadcastContent: "none",
                localized: {
                    title: "QUICK START: How to Find Federal Grants",
                    description: "Are you researching grants awarded by the federal government to organizations such as nonprofits? USAspending.gov lets you search for federal grants by agency, location, recipient type, and more. Learn about how to find specific grants and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n0:49 Step 1: Using Advanced Search filters to find grants\n  •  In Advanced Search, use the Award Type, Agency, Location, Recipient, Recipient Type, and Assistance Listing (CFDA Program) filters. Then click 'Submit Search.'\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n1:35 Step 2: Reviewing search results for grants (Table tab)\n  •  Use the Table tab to see all the award summaries that match your selected filters.\n  •  Use the Time tab to see how much has been spent over time.\n  •  Use the Map tab to see how much has been spent in various locations.\n  •  Use the Categories tab to see the breakdown of spending by agency, recipient, or assistance listing. You can refine your search by any of these categories.\n  •  Use the subaward toggle to find results for subawards rather than prime awards.\n\n2:41 Thank you!\n\nLINKS:\n\n  •  Watch our \"TUTORIAL\" video on this topic: https://youtu.be/8-r7aSvl8tY\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT3M22S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "_XbygWfqK9pp-bnj4mnJiY9K6nk",
            id: "jYs3zq3Tvs0",
            snippet: {
                publishedAt: "2022-10-17T12:00:34Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "TUTORIAL: How to Find Government Contracts for Small Businesses",
                description: "Are you interested in small business market research for government contracts? USAspending.gov lets you search for federal contracts by industry, location, recipient type, set-asides, and more. Learn about how to find specific contracts and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:11 Step 1: Identify top industries for small businesses\n  •  In Advanced Search, use the Award Type, Location, Recipient Type filters. Then click 'Submit Search.'\n  •  Click on the Categories tab to see top agencies, recipients, and industries (using PSC or NAICS codes) for your search.\n  •  Refine your search based on any top industries you found.\n\n4:40 Step 2: Identify federal contracts with set-asides\n  •  Refine your search using the Type of Set-Aside filter. Click 'Submit Search.'\n  •  In the Table tab, sort results to see the contracts ending soon, which may indicate an opportunity to recompete for these contracts.\n\n6:30 Step 3: Identify potential subcontract opportunities\n  •  Remove filters for set-asides and small businesses.\n  •  Use the Award Amount filter to set a minimum of $750,000. Awards above this amount are required to have a subcontracting plan.\n  •  Click 'Submit Search.' In the Table tab, sort results to see the most recent start dates. These newer contracts are more likely to have subcontract opportunities. \n\n8:22 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/Fzl4OIjP73A\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/jYs3zq3Tvs0/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/jYs3zq3Tvs0/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/jYs3zq3Tvs0/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/jYs3zq3Tvs0/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/jYs3zq3Tvs0/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "fiscal service",
                    "treasury",
                    "award spending",
                    "federal award",
                    "federal contract",
                    "subcontract",
                    "small business",
                    "set aside",
                    "industry",
                    "product",
                    "service",
                    "recipient"
                ],
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                    title: "TUTORIAL: How to Find Government Contracts for Small Businesses",
                    description: "Are you interested in small business market research for government contracts? USAspending.gov lets you search for federal contracts by industry, location, recipient type, set-asides, and more. Learn about how to find specific contracts and spending data in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:11 Step 1: Identify top industries for small businesses\n  •  In Advanced Search, use the Award Type, Location, Recipient Type filters. Then click 'Submit Search.'\n  •  Click on the Categories tab to see top agencies, recipients, and industries (using PSC or NAICS codes) for your search.\n  •  Refine your search based on any top industries you found.\n\n4:40 Step 2: Identify federal contracts with set-asides\n  •  Refine your search using the Type of Set-Aside filter. Click 'Submit Search.'\n  •  In the Table tab, sort results to see the contracts ending soon, which may indicate an opportunity to recompete for these contracts.\n\n6:30 Step 3: Identify potential subcontract opportunities\n  •  Remove filters for set-asides and small businesses.\n  •  Use the Award Amount filter to set a minimum of $750,000. Awards above this amount are required to have a subcontracting plan.\n  •  Click 'Submit Search.' In the Table tab, sort results to see the most recent start dates. These newer contracts are more likely to have subcontract opportunities. \n\n8:22 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/Fzl4OIjP73A\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en"
            },
            contentDetails: {
                duration: "PT9M4S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "7VCijZViNVchLU8vMyx_dtlhTkY",
            id: "b7SDGhSZ5wM",
            snippet: {
                publishedAt: "2022-08-15T12:30:15Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "USAspending.gov Origin Story",
                description: "Did you know that the U.S. government publishes open data on federal spending? USAspending.gov is the authoritative source of federal spending data for the public, researchers, and policymakers alike. Learn more about the origin story for USAspending.gov in this video! \n\nWe want to hear your ideas for future videos. Drop us a comment below! \n\nLINKS:\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/b7SDGhSZ5wM/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/b7SDGhSZ5wM/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/b7SDGhSZ5wM/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/b7SDGhSZ5wM/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/b7SDGhSZ5wM/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "federal spending",
                    "government spending",
                    "fiscal service",
                    "Treasury",
                    "FFATA",
                    "DATA Act",
                    "agency spending",
                    "award spending",
                    "Federal Funding Accountability and Transparency Act",
                    "Digital Accountability and Transparency Act"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                defaultLanguage: "en-US",
                localized: {
                    title: "USAspending.gov Origin Story",
                    description: "Did you know that the U.S. government publishes open data on federal spending? USAspending.gov is the authoritative source of federal spending data for the public, researchers, and policymakers alike. Learn more about the origin story for USAspending.gov in this video! \n\nWe want to hear your ideas for future videos. Drop us a comment below! \n\nLINKS:\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT3M45S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        },
        {
            kind: "youtube#video",
            etag: "OEHC4VqwNxIXJc5O9GUReZ8_T5Y",
            id: "ZuvZQ33ZvAE",
            snippet: {
                publishedAt: "2022-08-15T12:30:09Z",
                channelId: "UCyDn83O-0XC98H3TCV-VCGQ",
                title: "TUTORIAL: How to Find Government Spending to Your State",
                description: "Did you know you can track federal spending to your state, county, or congressional district? USAspending.gov is the single most complete source of spending data on federal awards and subawards such as contracts, grants, and loans. Learn more about how to track federal spending to your community in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:44 Step 1: Download your data in Advanced Search\n  •  In Advanced Search, use the Time Period filter and the Location filter. You can search by state, county, or congressional district.\n  •  Then click the Download button and select 'Transactions' and 'Everything'.\n\n4:06 Step 2: Calculate spending from prime awards\n  •  Open the Contracts Prime Transactions file and sum up the Federal Action Obligation column.\n  •  Open the Assistance Prime Transactions file and sum up the Federal Action Obligation column *and* the Original Loan Subsidy Cost column.\n\n7:57 Step 3: Calculate spending from subawards\n  •  Open the Contracts Subawards file and sum up the Subaward Amount column.\n  •  Open the Assistance Subawards file and sum up the Subaward Amount column.\n\n10:20 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/b9ABwzIyCNI\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/ZuvZQ33ZvAE/default.jpg",
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/ZuvZQ33ZvAE/mqdefault.jpg",
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/ZuvZQ33ZvAE/hqdefault.jpg",
                        width: 480,
                        height: 360
                    },
                    standard: {
                        url: "https://i.ytimg.com/vi/ZuvZQ33ZvAE/sddefault.jpg",
                        width: 640,
                        height: 480
                    },
                    maxres: {
                        url: "https://i.ytimg.com/vi/ZuvZQ33ZvAE/maxresdefault.jpg",
                        width: 1280,
                        height: 720
                    }
                },
                channelTitle: "USAspending",
                tags: [
                    "open data",
                    "government spending",
                    "federal spending",
                    "fiscal service",
                    "treasury",
                    "award spending",
                    "federal award",
                    "federal contract",
                    "federal loan",
                    "federal grant",
                    "congressional district",
                    "county",
                    "state",
                    "subaward",
                    "prime recipient",
                    "subaward recipient",
                    "prime award",
                    "obligation",
                    "outlay"
                ],
                categoryId: "27",
                liveBroadcastContent: "none",
                defaultLanguage: "en-US",
                localized: {
                    title: "TUTORIAL: How to Find Government Spending to Your State",
                    description: "Did you know you can track federal spending to your state, county, or congressional district? USAspending.gov is the single most complete source of spending data on federal awards and subawards such as contracts, grants, and loans. Learn more about how to track federal spending to your community in this video!\n\nWe want to hear your ideas for future videos. Drop us a comment below!\n\nCHAPTERS:\n\n0:00 Welcome!\n\n1:44 Step 1: Download your data in Advanced Search\n  •  In Advanced Search, use the Time Period filter and the Location filter. You can search by state, county, or congressional district.\n  •  Then click the Download button and select 'Transactions' and 'Everything'.\n\n4:06 Step 2: Calculate spending from prime awards\n  •  Open the Contracts Prime Transactions file and sum up the Federal Action Obligation column.\n  •  Open the Assistance Prime Transactions file and sum up the Federal Action Obligation column *and* the Original Loan Subsidy Cost column.\n\n7:57 Step 3: Calculate spending from subawards\n  •  Open the Contracts Subawards file and sum up the Subaward Amount column.\n  •  Open the Assistance Subawards file and sum up the Subaward Amount column.\n\n10:20 Thank you!\n\nLINKS:\n\n  •  Watch our \"QUICK START\" video on this topic: https://youtu.be/b9ABwzIyCNI\n\n  •  Visit USAspending.gov: https://www.usaspending.gov/\n\n  •  Sign up for our email list to receive updates and release notes by sending an email to:\n      join-usaspending@lists.fiscal.treasury.gov\n\n  •  Ask questions about the tools, features, and data on USAspending.gov by sending an email to:\n      usaspending.help@fiscal.treasury.gov\n\n  •  Request customized training on USAspending.gov for your organization:\n      https://www.usaspending.gov/about?section=training\n\nWe look forward to hearing from you!"
                },
                defaultAudioLanguage: "en-US"
            },
            contentDetails: {
                duration: "PT11M7S",
                dimension: "2d",
                definition: "hd",
                caption: "true",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
                hasCustomThumbnail: true
            }
        }
    ]
};

export default metaData;
