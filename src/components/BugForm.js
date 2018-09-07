import React from 'react';

const BugForm = () => (
  <React.Fragment>
    <h4>What is a bug?</h4>
    <p>A 'bug' is a defect in a website that causes it to behave in an unexpected way or produce an incorrect result. Some examples of typical bugs: </p>
    <ul>
    <li>A link is 'broken' and takes the user to a page that doesn't exist. </li>
    <li>Submitting a form produces an error message.</li>
    <li>A 'price calculator' returns an incorrect calculation.</li>
    <li>An element that was present on a design or wireframe
    (that was signed-off) is missing.</li>
    <li>A social media feed is not getting the correct data</li> 
    <li>A word that is non editable via the cms is speeelled incorrectly.</li>
    </ul>

  <h4>What a bug is not</h4>
<p>Often, there is can be a certain amount of ambiguity as to what a bug actually is. For example, whether something is working "correctly" can be debatable if a feature is not accurately defined in the project specification or the designs are ambiguous. However, some things certainly are not bugs. For example:</p>

<ul>
  <li>I don't like this being blue, can you change it to red (where it was blue in the designs).</li>
  <li>Can we add x feature here. </li>
  <li>How do I do this?</li>
  <li>Make this logo bigger.</li>
</ul>


<h4>Writing an Effective Bug-report</h4>
<p>Writing an accurate bug report is key to it being effective. Although some bugs may be very obvious to the observer, often there a number of factors that will cause a defect to occur inconsistently. Communicating your experiences in a succinct manner is crucial to making the bug as easy as possible to reproduce and therefore fix.</p>

<p>The classic example of a poorly written bug summary or description is "This doesn't work". This is unhelpful as it might not be obvious how the feature is broken or what caused it to break in your specific circumstances. Unless a product is unfinished, it is likely that the developer/s haven't knowingly shipped a feature that is broken. Different web browsers or even taking different steps can cause a bug to occur so it is important to give as much information as possible.</p>

<h4>So how do we write an effective bug description? The key is to be accurate and descriptive with your information and not make any assumptions.</h4>

<h5>Where did the bug occur?</h5>
<p>Sometimes a widget that works on one page can fail on another. Provide a URL of the page it occurred—just copy it from the address bar of your browser, this can contain really important information if the page is using 'querystrings' (developer talk for the weird nonsense that appears after a '?' in the URL).</p>

<h5>What did you expect to happen?</h5>
<p>If you click a link and expect to be taken to a certain page then mention the expected page. Stating the "wrong page" isn't as helpful as saying the "contact us page". If you entered a value in to a field and clicked "calculate" and got the wrong answer, what did you expect the value to be? What did you enter in to the field?</p>

<h5>What actually happened?</h5>
<p>Tell us exactly what happened, not "it didn't work". If there's an error message, what was it? It may look like gibberish but developers understand that gibberish. That's why they're always so grumpy! Can't describe something in words? Take a screenshot and attach it to the bug report. This can be exceptionally useful if the defect is visual in nature.</p>

<h5>Steps to reproduce</h5>
<p>Obviously, we don't need to know that you had a cup of coffee before clicking a link caused the bug but if you did anything else on the page (especially if its related) then mention that. If you clicked a particular button (where there are several), mention that. Put yourself in the developers shoes—they have to re-create your experience so be as descriptive as possible. If possible, re-create the bug yourself. This will allow you to identify the steps you took and make it easier to describe them. This is particularly important if the bug occurs in a system that is reasonably complex such as a lengthy form. Reproducing the bug yourself will also provide insight as to whether the bug is easily reproducible as it might not happen consistently and you will get a better idea of what you did that causes it to occur.</p>

<h5>Provide technical information</h5>
<p>Which web browser you are using is probably the most important piece of information you can provide. As any web developer will tell you, the various incarnations of Internet Explorer are the most common web browsers where unexpected things can occur. Providing the version (e.g. Internet Explorer 8) is immensely helpful. Whether or not you are using a PC or Mac, iPhone, iPad or Android device is also important information.</p>


    <form name="bugform" method="POST" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Bug Severity:
          <select name="bugLevel[]" multiple>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="question">Feature Request</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          URL The Bug Exists: <input type="text" name="url" />
        </label>
        <label>
          Bug Report: <textarea name="message" />
        </label>
        <label>
          Screenshot of Bug: <input type="file" name="screenshot" />
        </label>

      </p>
      <p>
        <button type="submit">Submit Report</button>
      </p>
    </form>
  </React.Fragment>
);

export default BugForm;
