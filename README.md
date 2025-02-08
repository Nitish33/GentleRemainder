<h1>Custom Drawer Implementation</h1>

<h3>File Structure</h3>
<ol>
<li>Components</li>
<li>navigation</li>
<li>screens</li>
<li>Utils</li>
</ol>

<h4>Components</h4>
This folder include all the Reusable components used across the App. Currently, it include ScreenContainer which will wrap all the screens. 


<h4>Navigation</h4>
This folder will include all the navigation related components and functions

<h4>screens</h4>
This folder will include all screens


<h4>Utils</h4>
This folder will include all the helper functions and constants like Color token, Dimension token, Reusable functions


<h1>Recording</h1>
[Watch the Recording](https://www.youtube.com/watch?v=vG4JFjJWP8A)

<h1>Implementation Details</h1>
This implementation looks simple as first but really tends to get complex due to implementation of React Navigation.  
<ol>
    <li>We have to make due our content do not slide as we make a swipe gesture to open drawer so that we can apply custom animations. Do to this, I have patched the Navigation library to remove default animation
    </li>
     <li>Since we are not moving our view with the sliding gesture, virtually Screen content (library overlay), is still covering the entire screen even when drawer is open. Which make it impossible to click on DrawerItem. <br> To Prevent this issue, Patched the library again and removed Overlay and set <code>pointerEvents</code> to auto or box-none depending on if it is opened or not
    </li>
    <li>To make drawer content appear from back, set the drawer type to back. <code>drawerType: 'back'</code>
    </li>
</ol>
