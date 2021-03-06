import styled from "styled-components";
import { withParentSize } from "@vx/vx";
import React from "react";
const Logo = withParentSize(function({ parentWidth, parentHeight }) {
  const margin = {
    top: 5,
    bottom: 5,
    right: 22,
    left: 22
  };
  const width = parentWidth - margin.left - margin.right;
  const wCenter = parentWidth / 2;
  const hCenter = parentHeight / 2;
  const topCenter = hCenter - hCenter * 0.25;
  const bottomCenter = hCenter + hCenter * 0.25;
  return (
    <svg width={parentWidth} height={parentHeight}>
      <g fill='#ff6f88'>
        <path
          fillOpacity={0.5}
          d={`M${wCenter},${margin.top}L${wCenter},${topCenter}L${
            margin.left
          },${hCenter}L${wCenter},${margin.top}`}
        />
        <path
          fillOpacity={0.6}
          d={`M${wCenter},${margin.top}L${wCenter},${topCenter}L${parentWidth -
            margin.right},${hCenter}L${wCenter},${margin.top}`}
        />
        <path
          fillOpacity={0.8}
          d={`M${wCenter},${topCenter}L${wCenter},${bottomCenter}L${
            margin.left
          },${hCenter}L${wCenter},${topCenter}`}
        />
        <path
          fillOpacity={0.9}
          d={`M${wCenter},${topCenter}L${wCenter},${bottomCenter}L${parentWidth -
            margin.right},${hCenter}L${wCenter},${topCenter}`}
        />
        <path
          fillOpacity={0.5}
          d={`M${margin.left},${hCenter + 3}L${wCenter},${bottomCenter +
            3}L${wCenter},${parentHeight - margin.bottom}L${
            margin.left
          },${hCenter + 3}`}
        />
        <path
          fillOpacity={0.8}
          d={`M${parentWidth - margin.right},${hCenter +
            3}L${wCenter},${bottomCenter + 3}L${wCenter},${parentHeight -
            margin.bottom}L${parentWidth - margin.right},${hCenter + 3}`}
        />
      </g>
    </svg>
  );
});

const StyledBanner = styled.div`
  
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-40px, 75%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  image {
    display: flex;
    background-color: white;
    width: 80px;
    height: 80px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  }
  .controls {
    background-color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    user-select: none;
  }
  .numitems {
    margin: 0 0.5rem;
    font-size: 22px;
    min-width: 40px;
    text-align: center;
  }
`;

export default function Banner({
  logo,increaseNumItems,
  decreaseNumItems,
  numItems
}) {
  return (
    <StyledBanner>
        <div className='controls'>
          <button onClick={increaseNumItems}>+</button>
          <span className='numitems'>{numItems}</span>
          <button onClick={decreaseNumItems}>-</button>
        </div>   
        <img style={{}} src={logo}/>     
    </StyledBanner>
  );
}
