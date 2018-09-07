import React from 'react';

const bugform = () => (
    <form className="pure-form pure-form-stacked" name="bugform" method="POST" netlify>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
        <label>
          Bug Severity:
          <select name="bugLevel[]">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="question">Feature Request</option>
          </select>
        </label>
        <label>
          URL The Bug Exists: <input type="text" name="url" />
        </label>
        <label>
          Bug Report: <textarea name="message" />
        </label>
        <label>
          Screenshot of Bug: <br />
          <input type="file" name="screenshot" />
        </label>
        <button className="btn-primary" type="submit">Submit Report</button>
    </form>
);

export default bugform;
