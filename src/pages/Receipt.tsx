import React from 'react';
import './Receipt.css';

const Receipt: React.FC = () => {
  return (
    <div>
      <div className="receipt__main-box">
        <div>
          <div className="receipt__title-list">
            <div className="receipt__title">title</div>
            <div className="receipt__title">title</div>
            <div className="receipt__title">title</div>
            <div className="receipt__title">title</div>
            <div className="receipt__title">title</div>
          </div>
        </div>

      </div>
      <div className="receipt__content-box">
        <div className="receipt__content">
          <ul className="receipt__content-list">
            <li>
              <div>text</div>
              <div>content</div>
            </li>
            <li>
              <div>text</div>
              <div>content</div>
            </li>
            <li>
              <div>text</div>
              <div>content</div>
            </li>
            <li>
              <div>text</div>
              <div>content</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Receipt;