import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {NavItem} from 'react-bootstrap';
import {MatchSettingsPath, MatchDashboardPath} from './common/MatchPath';

const DashboardNav = () => (
	<section className="dashboard_nav">
	    <div className="container">
	        <div className="dash_nav">
	            <ul className="clearfix">
	            	<LinkContainer to="/dashboard" isActive={MatchDashboardPath}>
		            	<NavItem eventKey={1}>
		            		<span className="glyphicon glyphicon-th-large"></span>
		            		<span className="txtmob"> DASHBOARD</span>
		            	</NavItem>
		            </LinkContainer>
	                <LinkContainer to="/my-subscriptions">
	                    <NavItem eventKey={2}>
	                        <span className="glyphicon glyphicon-list-alt"></span>
	                        <span className="txtmob"> my subscriptions</span>
	                    </NavItem>
	                </LinkContainer>
	                <LinkContainer to="/profile" isActive={MatchSettingsPath}>
	                    <NavItem eventKey={3}>
	                        <span className="glyphicon glyphicon-cog"></span>
                        	<span className="txtmob"> Setting</span>
                        </NavItem>
	                </LinkContainer>
	            </ul>
	        </div>
	    </div>
	</section>
);

export default DashboardNav;