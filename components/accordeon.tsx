'use client'

import { useState } from "react";

interface Props {
  title: string;
  content: string;
}

export default function Accordion(props: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="accordeon-content">
      <div className={isShowing ? 'accordeon --actived' : 'accordeon'} onClick={toggle}>
        <p className="title">{props.title}</p>
        <span>{isShowing ? "-" : "+"}</span>
      </div>
      <div
        className="content"
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      <style jsx>{`
      * {
        font-family: 'futura-book-bt';
      }

      .accordeon-content {
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      .accordeon {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: flex-start;
        font-style: normal;
        font-weight: 400;
        font-size: 2em;
        text-align: center;
        color: #0B1628;
      }

      .accordeon > * {
        margin: .5rem;
      }

      .accordeon span{
        font-size: 2rem;
        padding-right: 2rem;
      }

      .title {
        font-size: 1.5rem;
        padding: .5rem;
        text-align: left;
      }

      .content {
        padding: 1rem 2rem;
        color: #0B1628;
        font-size: 1rem;
      }

      .--actived {
        border-radius: 53.5px;
        background-color: #0B1628;
        color: #B4F4FE;
      }

      `}</style>
    </div>
  );
}
