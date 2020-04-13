import React from 'react';
import { Button } from 'reactstrap';

const DevDetail = () => {
  return (
    <div className="dev-detail">
      Sobedan Sridaran&nbsp;
      |
      <Button type="button" title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/sobedan-sridaran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </Button>
      |
      <Button type="button" title="Github">
        <a
          href="https://github.com/sobesri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </Button>
      |&nbsp;&nbsp;Provide Feedback :
      <Button className="comment" type="button" title="Feedback">
        <a
          href="https://forms.gle/PsMxEjBuXfGdaB5B6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-file-text-o"></i>
        </a>
      </Button>
    </div>
  );
}

export default DevDetail;