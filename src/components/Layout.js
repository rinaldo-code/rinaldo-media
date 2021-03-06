import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    <link rel="apple-touch-icon" sizes="180x180" href="rinaldo.media/images/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="rinaldo.media/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="rinaldo.media/images/favicon-16x16.png" />
                    <link rel="manifest" href="rinaldo.media/images/site.webmanifest" />
              </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.color_scheme') + ' accent-' + _.get(this.props, 'pageContext.site.siteMetadata.accent_color')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
