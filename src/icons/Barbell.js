import React from 'react'

const Barbell = ({ style, ...props }) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 40 40"
        style={{ fill: 'currentColor', verticalAlign: 'middle', ...style }}
        {...props}>
        <g style={{ display: "inline" }}>
            <path
                d="M 4.5527344 12.025391 C 3.7692601 12.025391 3.1386719 12.655979 3.1386719 13.439453 L 3.1386719 26.621094 C 3.1386719 27.404569 3.7692601 28.035156 4.5527344 28.035156 C 5.3362087 28.035156 5.9667969 27.404569 5.9667969 26.621094 L 5.9667969 21.173828 L 34.162109 21.173828 L 34.162109 26.664062 C 34.162109 27.447536 34.792698 28.078125 35.576172 28.078125 C 36.359647 28.078125 36.990234 27.447536 36.990234 26.664062 L 36.990234 13.484375 C 36.990234 12.700901 36.359647 12.068359 35.576172 12.068359 C 34.792698 12.068359 34.162109 12.700901 34.162109 13.484375 L 34.162109 18.863281 L 5.9667969 18.863281 L 5.9667969 13.439453 C 5.9667969 12.655979 5.3362087 12.025391 4.5527344 12.025391 z M 1.1484375 15.351562 C 0.51186485 15.351562 0 15.854348 0 16.480469 L 0 23.556641 C 0 24.182762 0.51186485 24.6875 1.1484375 24.6875 C 1.7850101 24.6875 2.2988281 24.182762 2.2988281 23.556641 L 2.2988281 16.480469 C 2.2988281 15.854348 1.7850101 15.351562 1.1484375 15.351562 z M 38.978516 15.394531 C 38.341943 15.394531 37.830078 15.899269 37.830078 16.525391 L 37.830078 23.601562 C 37.830078 24.227684 38.341943 24.732422 38.978516 24.732422 C 39.615088 24.732422 40.128906 24.227683 40.128906 23.601562 L 40.128906 16.525391 C 40.128906 15.899269 39.615088 15.394531 38.978516 15.394531 z "
            />
        </g>
    </svg >
)

export default Barbell