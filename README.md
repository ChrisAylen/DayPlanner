## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Assumptions
```md
Business hours is 9am-5pm
The time or color of an event has no bearing on it's editibility.
```

## Usage

Click in the text area nextr to the time (as diaplayed on the left) to add an event.  Click the save button on the right to save the event.

Grey coloured events are in the past.  Green coloured events are in the future.  Red coloured events are in the present.

Events are save in your current browser only.  If you change browswer tabs, the events will not persist.

Events are stored on the basis of hour only.  The current DATE is not taken into account.

![DayPlanner](/assets/images/screen_capture.png)

## Comments
    
    ```md
    Moment JS now appears to not be reccomended for use in new projects.
    [Moment.js](https://momentjs.com/docs/#:~:text=but%we%would5like%to%discourage%Moment%from%being%used)

    ToDo: Add a clear all function to clear the day
    
    ```
    