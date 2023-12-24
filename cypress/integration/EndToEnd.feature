
Feature: End-to-End Test

  Scenario: Perform End-to-End Test

    Given I visit the ZenHR application
    When I navigate to the sign-in page
      And I log in with username "tillawy@hotmail.com" and password "password"
    Then I should login successfully and see the dashboard
    When I open the Employees Directory and click the "B" button
    Then I should see more than two entries
    When I open the side menu
    Then all links in the side menu should be functional
    When I open the top-right dropdown menu and log out
    Then I should see the logout success message