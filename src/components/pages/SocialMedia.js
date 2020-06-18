import React from "react";

export const SocialMedia = function(props) {
  return (
    <div>
      <div className="container p-3 my-3 border wrapper-box">
        <div class="card">
          <div class="card-header">
            <h4>Thanks!</h4>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>'Leo Lanese',
                  'Building Inspiring Responsive Reactive Solutions',
                  'London, UK'</p>
            </blockquote>

              <h5>Twitter:
              <a href="http://twitter.com/LeoLaneseltd" target="_blank" rel="noreferrer noopener"> twitter.com/LeoLaneseltd</a>
              </h5>
              <h5>Portfolio
              <a href="http://www.leolanese.com" target="_blank" rel="noreferrer noopener"> http://www.leolanese.com</a>
              </h5>
              <h5>DEV.to:
              <a href="http://www.dev.to/leolanese" target="_blank" rel="noreferrer noopener"> dev.to/leolanese</a>
              </h5>
              <h5>Blog:
              <a href="http://www.leolanese.com/blog" target="_blank" rel="noreferrer noopener"> leolanese.com/blog</a>
              </h5>
              </div>
          </div>
        </div>
    </div>
  );
};

export default SocialMedia;
