import React from 'react'
import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            <i
              class="fas fa-rss-square"
              style={{
                color: 'black',
              }}
            />
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/jefiozie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            class="fab fa-twitter"
            style={{
              color: 'black',
            }}
          />
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/jefiozie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            class="fab fa-github"
            style={{
              color: 'black',
            }}
          />
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/1389530/jefiozie
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            class="fab fa-stack-overflow"
            style={{
              color: 'black',
            }}
          />
        </a>{' '}
      </footer>
    )
  }
}
export default Footer
