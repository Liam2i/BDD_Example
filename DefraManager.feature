Feature: Defra Manager

	Scenario: Log out
		When I click log out
		Then I am logged out
		
		
	Scenario: Sort Dashboard card
		When I sort card
		Then Card is sorted
		
	
	Scenario: Views alert from Dashboard
		When I click on alerts
		Then Alerts are displayed
		
	Scenario: Goto Alert settings
		Given I goto alerts page
		When I click on alert settings
		Then Alerts settings are displayed
		
	
	Scenario: Search and view a site
		Given I goto search page
		When I search
		And I click on search results
		Then I view site page
		
	Scenario: Sort search results
		Given I goto search page
		When I sort search
		Then Results are sorted
		
	
	Scenario: Create a report
		Given I goto reports page
		When I click create report
		And I enter report details
		Then Report is created
		
		
	Scenario: View favourite reports
		Given I goto favourites page
		When I click reports
		Then Favourite reports displayed