export default {
  // Graphic axes and values for each point
  config: {
    yDomain: [0, 100],
    legend: "% of degrees granted to women",
    title: "Percentage of Women Bachelors by field",
    sources: `National Center for Education Statistics, tables 325 -
    trends in degrees by field and sex`
  },
  measures: {
    xPoints: {
      1970: { value: 135, visibleMark: true },
      1971: { value: 149.9 },
      1972: { value: 162.5 },
      1973: { value: 177.4 },
      1974: { value: 190.6 },
      1975: { value: 202.1, visibleMark: true },
      1976: { value: 217 },
      1977: { value: 228.9 },
      1978: { value: 242.1 },
      1979: { value: 257 },
      1980: { value: 270.6, visibleMark: true },
      1981: { value: 284.3 },
      1982: { value: 296.6 },
      1983: { value: 312 },
      1984: { value: 324.3 },
      1985: { value: 336.1, visibleMark: true },
      1986: { value: 349.8 },
      1987: { value: 363.4 },
      1988: { value: 376.1 },
      1989: { value: 389.3 },
      1990: { value: 404.3, visibleMark: true },
      1991: { value: 418.3 },
      1992: { value: 430.2 },
      1993: { value: 444.3 },
      1994: { value: 457.5 },
      1995: { value: 470.2, visibleMark: true },
      1996: { value: 484.7 },
      1997: { value: 497.3 },
      1998: { value: 510.2 },
      1999: { value: 523 },
      2000: { value: 537.9, visibleMark: true },
      2001: { value: 551.1 },
      2002: { value: 565.2 },
      2003: { value: 576.6 },
      2004: { value: 591.5 },
      2005: { value: 603.8, visibleMark: true },
      2006: { value: 617.5 },
      2007: { value: 630.7 },
      2008: { value: 644.3 },
      2009: { value: 657.9 },
      2010: { value: 670.7, visibleMark: true },
      2011: { value: 683 },
      2012: { value: 697.9 },
      2013: { value: 711.1 },
      2014: { value: 724.3 },
      2015: { value: 737.5, visibleMark: true },
      2016: { value: 751.1 },
      2017: { value: 763 },
      2018: { value: 767 },
      2019: { value: 780 },
      2020: { value: 782, visibleMark: true }
    },
    yPoints: [
      { label: 0 },
      { label: 10 },
      { label: 20, visibleMark: true },
      { label: 30 },
      { label: 40, visibleMark: true },
      { label: 50 },
      { label: 60, visibleMark: true },
      { label: 70 },
      { label: 80, visibleMark: true },
      { label: 90 },
      { label: 100, visibleMark: true, hideGuideline: true }
    ]
  },
  entries: [
    {
      text: {
        className: "st14",
        value: "Health professions"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 77.064 },
          { date: 1971, value: 75.516 },
          { date: 1972, value: 76.902 },
          { date: 1973, value: 77.434 },
          { date: 1974, value: 77.87 },
          { date: 1975, value: 78.869 },
          { date: 1976, value: 79.21 },
          { date: 1977, value: 80.486 },
          { date: 1978, value: 81.94 },
          { date: 1979, value: 82.254 },
          { date: 1980, value: 83.458 },
          { date: 1981, value: 84.118 },
          { date: 1982, value: 84.389 },
          { date: 1983, value: 84.583 },
          { date: 1984, value: 85.089 },
          { date: 1985, value: 85.256 },
          { date: 1986, value: 85.715 },
          { date: 1987, value: 85.465 },
          { date: 1988, value: 85.166 },
          { date: 1989, value: 84.614 },
          { date: 1990, value: 83.934 },
          { date: 1991, value: 83.545 },
          { date: 1992, value: 83.042 },
          { date: 1993, value: 82.373 },
          { date: 1994, value: 81.847 },
          { date: 1995, value: 81.481 },
          { date: 1996, value: 81.317 },
          { date: 1997, value: 81.921 },
          { date: 1998, value: 82.125 },
          { date: 1999, value: 83.5 },
          { date: 2000, value: 83.519 },
          { date: 2001, value: 85.087 },
          { date: 2002, value: 85.832 },
          { date: 2003, value: 86.451 },
          { date: 2004, value: 86.542 },
          { date: 2005, value: 85.987 },
          { date: 2006, value: 85.931 },
          { date: 2007, value: 85.389 },
          { date: 2008, value: 85.238 },
          { date: 2009, value: 85.103 },
          { date: 2010, value: 84.985 },
          { date: 2011, value: 84.783 },
          { date: 2012, value: 84.428 },
          { date: 2013, value: 84.438 },
          { date: 2014, value: 84.434 },
          { date: 2015, value: 84.158 },
          { date: 2016, value: 84.138 },
          { date: 2017, value: 84.475 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Public administration & social services"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 68.422 },
          { date: 1971, value: 65.53 },
          { date: 1972, value: 62.6 },
          { date: 1973, value: 64.348 },
          { date: 1974, value: 66.107 },
          { date: 1975, value: 63.044 },
          { date: 1976, value: 65.642 },
          { date: 1977, value: 69.314 },
          { date: 1978, value: 71.502 },
          { date: 1979, value: 73.257 },
          { date: 1980, value: 74.573 },
          { date: 1981, value: 74.683 },
          { date: 1982, value: 76.807 },
          { date: 1983, value: 76.149 },
          { date: 1984, value: 75.931 },
          { date: 1985, value: 75.048 },
          { date: 1986, value: 75.721 },
          { date: 1987, value: 76.398 },
          { date: 1988, value: 75.581 },
          { date: 1989, value: 76.028 },
          { date: 1990, value: 77.595 },
          { date: 1991, value: 78.238 },
          { date: 1992, value: 77.341 },
          { date: 1993, value: 78.001 },
          { date: 1994, value: 78.828 },
          { date: 1995, value: 78.815 },
          { date: 1996, value: 79.771 },
          { date: 1997, value: 80.982 },
          { date: 1998, value: 81.306 },
          { date: 1999, value: 81.094 },
          { date: 2000, value: 81.128 },
          { date: 2001, value: 80.889 },
          { date: 2002, value: 81.276 },
          { date: 2003, value: 81.544 },
          { date: 2004, value: 80.665 },
          { date: 2005, value: 81.233 },
          { date: 2006, value: 81.189 },
          { date: 2007, value: 82.115 },
          { date: 2008, value: 81.666 },
          { date: 2009, value: 81.991 },
          { date: 2010, value: 81.667 },
          { date: 2011, value: 81.862 },
          { date: 2012, value: 82.272 },
          { date: 2013, value: 82.331 },
          { date: 2014, value: 82.115 },
          { date: 2015, value: 82.508 },
          { date: 2016, value: 82.408 },
          { date: 2017, value: 82.803 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Education"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 74.535 },
          { date: 1971, value: 74.149 },
          { date: 1972, value: 73.554 },
          { date: 1973, value: 73.501 },
          { date: 1974, value: 73.336 },
          { date: 1975, value: 72.801 },
          { date: 1976, value: 72.166 },
          { date: 1977, value: 72.456 },
          { date: 1978, value: 73.192 },
          { date: 1979, value: 73.821 },
          { date: 1980, value: 74.981 },
          { date: 1981, value: 75.845 },
          { date: 1982, value: 75.843 },
          { date: 1983, value: 75.95 },
          { date: 1984, value: 75.869 },
          { date: 1985, value: 75.923 },
          { date: 1986, value: 76.143 },
          { date: 1987, value: 76.963 },
          { date: 1988, value: 77.627 },
          { date: 1989, value: 78.111 },
          { date: 1990, value: 78.866 },
          { date: 1991, value: 78.991 },
          { date: 1992, value: 78.435 },
          { date: 1993, value: 77.267 },
          { date: 1994, value: 75.814 },
          { date: 1995, value: 75.125 },
          { date: 1996, value: 75.035 },
          { date: 1997, value: 75.163 },
          { date: 1998, value: 75.486 },
          { date: 1999, value: 75.838 },
          { date: 2000, value: 76.692 },
          { date: 2001, value: 77.375 },
          { date: 2002, value: 78.644 },
          { date: 2003, value: 78.544 },
          { date: 2004, value: 78.65 },
          { date: 2005, value: 79.067 },
          { date: 2006, value: 78.677 },
          { date: 2007, value: 78.726 },
          { date: 2008, value: 79.194 },
          { date: 2009, value: 79.524 },
          { date: 2010, value: 79.611 },
          { date: 2011, value: 79.448 },
          { date: 2012, value: 79.155 },
          { date: 2013, value: 79.403 },
          { date: 2014, value: 79.838 },
          { date: 2015, value: 80.017 },
          { date: 2016, value: 81.126 },
          { date: 2017, value: 81.642 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Psychology"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 44.413 },
          { date: 1971, value: 46.234 },
          { date: 1972, value: 47.607 },
          { date: 1973, value: 50.386 },
          { date: 1974, value: 52.611 },
          { date: 1975, value: 54.457 },
          { date: 1976, value: 56.902 },
          { date: 1977, value: 58.951 },
          { date: 1978, value: 61.261 },
          { date: 1979, value: 63.319 },
          { date: 1980, value: 65.101 },
          { date: 1981, value: 66.89 },
          { date: 1982, value: 67.545 },
          { date: 1983, value: 67.933 },
          { date: 1984, value: 68.155 },
          { date: 1985, value: 68.974 },
          { date: 1986, value: 68.958 },
          { date: 1987, value: 70.071 },
          { date: 1988, value: 70.936 },
          { date: 1989, value: 71.574 },
          { date: 1990, value: 72.607 },
          { date: 1991, value: 73.207 },
          { date: 1992, value: 73.193 },
          { date: 1993, value: 73.108 },
          { date: 1994, value: 72.907 },
          { date: 1995, value: 72.981 },
          { date: 1996, value: 73.881 },
          { date: 1997, value: 74.393 },
          { date: 1998, value: 75.082 },
          { date: 1999, value: 76.479 },
          { date: 2000, value: 77.479 },
          { date: 2001, value: 77.487 },
          { date: 2002, value: 77.731 },
          { date: 2003, value: 77.839 },
          { date: 2004, value: 77.807 },
          { date: 2005, value: 77.459 },
          { date: 2006, value: 77.422 },
          { date: 2007, value: 77.106 },
          { date: 2008, value: 77.204 },
          { date: 2009, value: 77.1 },
          { date: 2010, value: 76.978 },
          { date: 2011, value: 76.7 },
          { date: 2012, value: 76.57 },
          { date: 2013, value: 76.723 },
          { date: 2014, value: 77.203 },
          { date: 2015, value: 77.626 },
          { date: 2016, value: 78.161 },
          { date: 2017, value: 78.89 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "English language and literature/letters"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 65.57 },
          { date: 1971, value: 64.556 },
          { date: 1972, value: 63.664 },
          { date: 1973, value: 62.941 },
          { date: 1974, value: 62.413 },
          { date: 1975, value: 61.647 },
          { date: 1976, value: 62.148 },
          { date: 1977, value: 62.723 },
          { date: 1978, value: 63.619 },
          { date: 1979, value: 65.088 },
          { date: 1980, value: 65.284 },
          { date: 1981, value: 65.838 },
          { date: 1982, value: 65.847 },
          { date: 1983, value: 65.918 },
          { date: 1984, value: 65.749 },
          { date: 1985, value: 65.798 },
          { date: 1986, value: 65.982 },
          { date: 1987, value: 66.706 },
          { date: 1988, value: 67.144 },
          { date: 1989, value: 67.017 },
          { date: 1990, value: 66.921 },
          { date: 1991, value: 66.241 },
          { date: 1992, value: 65.622 },
          { date: 1993, value: 65.73 },
          { date: 1994, value: 65.641 },
          { date: 1995, value: 65.936 },
          { date: 1996, value: 66.437 },
          { date: 1997, value: 66.786 },
          { date: 1998, value: 67.255 },
          { date: 1999, value: 67.82 },
          { date: 2000, value: 68.365 },
          { date: 2001, value: 68.578 },
          { date: 2002, value: 68.829 },
          { date: 2003, value: 68.894 },
          { date: 2004, value: 68.454 },
          { date: 2005, value: 68.573 },
          { date: 2006, value: 68.297 },
          { date: 2007, value: 67.864 },
          { date: 2008, value: 67.595 },
          { date: 2009, value: 67.968 },
          { date: 2010, value: 67.932 },
          { date: 2011, value: 68.425 },
          { date: 2012, value: 68.496 },
          { date: 2013, value: 68.629 },
          { date: 2014, value: 69.346 },
          { date: 2015, value: 70.145 },
          { date: 2016, value: 70.365 },
          { date: 2017, value: 70.801 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Foreign languages and literatures"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 73.756 },
          { date: 1971, value: 73.876 },
          { date: 1972, value: 74.62 },
          { date: 1973, value: 74.931 },
          { date: 1974, value: 75.276 },
          { date: 1975, value: 74.982 },
          { date: 1976, value: 74.412 },
          { date: 1977, value: 74.298 },
          { date: 1978, value: 74.331 },
          { date: 1979, value: 74.15 },
          { date: 1980, value: 74.11 },
          { date: 1981, value: 73.879 },
          { date: 1982, value: 72.712 },
          { date: 1983, value: 71.797 },
          { date: 1984, value: 72.14 },
          { date: 1985, value: 70.787 },
          { date: 1986, value: 71.177 },
          { date: 1987, value: 72.01 },
          { date: 1988, value: 72.329 },
          { date: 1989, value: 72.397 },
          { date: 1990, value: 71.242 },
          { date: 1991, value: 71.128 },
          { date: 1992, value: 71.022 },
          { date: 1993, value: 69.997 },
          { date: 1994, value: 69.116 },
          { date: 1995, value: 69.565 },
          { date: 1996, value: 69.71 },
          { date: 1997, value: 69.991 },
          { date: 1998, value: 70.078 },
          { date: 1999, value: 70.942 },
          { date: 2000, value: 70.889 },
          { date: 2001, value: 71.183 },
          { date: 2002, value: 70.458 },
          { date: 2003, value: 70.626 },
          { date: 2004, value: 70.792 },
          { date: 2005, value: 69.906 },
          { date: 2006, value: 69.548 },
          { date: 2007, value: 70.184 },
          { date: 2008, value: 70.215 },
          { date: 2009, value: 69.279 },
          { date: 2010, value: 69.043 },
          { date: 2011, value: 69.53 },
          { date: 2012, value: 68.392 },
          { date: 2013, value: 69.181 },
          { date: 2014, value: 68.881 },
          { date: 2015, value: 68.783 },
          { date: 2016, value: 68.486 },
          { date: 2017, value: 68.817 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Communication, journalism"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 35.299 },
          { date: 1971, value: 35.461 },
          { date: 1972, value: 36.62 },
          { date: 1973, value: 38.371 },
          { date: 1974, value: 40.487 },
          { date: 1975, value: 41.462 },
          { date: 1976, value: 44.292 },
          { date: 1977, value: 46.929 },
          { date: 1978, value: 49.858 },
          { date: 1979, value: 52.278 },
          { date: 1980, value: 54.673 },
          { date: 1981, value: 56.411 },
          { date: 1982, value: 58.048 },
          { date: 1983, value: 58.555 },
          { date: 1984, value: 59.068 },
          { date: 1985, value: 59.019 },
          { date: 1986, value: 60.016 },
          { date: 1987, value: 60.201 },
          { date: 1988, value: 60.406 },
          { date: 1989, value: 60.494 },
          { date: 1990, value: 60.778 },
          { date: 1991, value: 60.828 },
          { date: 1992, value: 59.651 },
          { date: 1993, value: 58.71 },
          { date: 1994, value: 58.134 },
          { date: 1995, value: 58.756 },
          { date: 1996, value: 58.719 },
          { date: 1997, value: 60.004 },
          { date: 1998, value: 60.03 },
          { date: 1999, value: 61.176 },
          { date: 2000, value: 61.916 },
          { date: 2001, value: 63.002 },
          { date: 2002, value: 63.713 },
          { date: 2003, value: 64.64 },
          { date: 2004, value: 64.212 },
          { date: 2005, value: 63.601 },
          { date: 2006, value: 63.012 },
          { date: 2007, value: 62.512 },
          { date: 2008, value: 62.439 },
          { date: 2009, value: 62.761 },
          { date: 2010, value: 62.517 },
          { date: 2011, value: 62.227 },
          { date: 2012, value: 62.507 },
          { date: 2013, value: 62.859 },
          { date: 2014, value: 63.233 },
          { date: 2015, value: 63.501 },
          { date: 2016, value: 64.069 },
          { date: 2017, value: 64.58 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Biological and biomedical sciences"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 29.088 },
          { date: 1971, value: 29.394 },
          { date: 1972, value: 29.81 },
          { date: 1973, value: 31.147 },
          { date: 1974, value: 32.996 },
          { date: 1975, value: 34.449 },
          { date: 1976, value: 36.072 },
          { date: 1977, value: 38.331 },
          { date: 1978, value: 40.112 },
          { date: 1979, value: 42.065 },
          { date: 1980, value: 43.999 },
          { date: 1981, value: 45.249 },
          { date: 1982, value: 45.967 },
          { date: 1983, value: 46.713 },
          { date: 1984, value: 47.669 },
          { date: 1985, value: 47.909 },
          { date: 1986, value: 48.3 },
          { date: 1987, value: 50.209 },
          { date: 1988, value: 50.099 },
          { date: 1989, value: 50.774 },
          { date: 1990, value: 50.818 },
          { date: 1991, value: 51.468 },
          { date: 1992, value: 51.349 },
          { date: 1993, value: 51.124 },
          { date: 1994, value: 52.246 },
          { date: 1995, value: 52.599 },
          { date: 1996, value: 53.789 },
          { date: 1997, value: 54.999 },
          { date: 1998, value: 56.351 },
          { date: 1999, value: 58.228 },
          { date: 2000, value: 59.389 },
          { date: 2001, value: 60.712 },
          { date: 2002, value: 61.895 },
          { date: 2003, value: 62.169 },
          { date: 2004, value: 61.914 },
          { date: 2005, value: 61.505 },
          { date: 2006, value: 60.185 },
          { date: 2007, value: 59.431 },
          { date: 2008, value: 59.304 },
          { date: 2009, value: 58.484 },
          { date: 2010, value: 59.006 },
          { date: 2011, value: 58.745 },
          { date: 2012, value: 58.608 },
          { date: 2013, value: 58.492 },
          { date: 2014, value: 58.96 },
          { date: 2015, value: 59.916 },
          { date: 2016, value: 61.021 },
          { date: 2017, value: 62.202 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Agriculture and natural resources"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 4.2297 },
          { date: 1971, value: 5.4527 },
          { date: 1972, value: 7.4207 },
          { date: 1973, value: 9.6536 },
          { date: 1974, value: 14.074 },
          { date: 1975, value: 18.333 },
          { date: 1976, value: 22.252 },
          { date: 1977, value: 24.64 },
          { date: 1978, value: 27.146 },
          { date: 1979, value: 29.633 },
          { date: 1980, value: 30.759 },
          { date: 1981, value: 31.318 },
          { date: 1982, value: 32.636 },
          { date: 1983, value: 31.635 },
          { date: 1984, value: 31.092 },
          { date: 1985, value: 31.379 },
          { date: 1986, value: 31.198 },
          { date: 1987, value: 31.486 },
          { date: 1988, value: 31.085 },
          { date: 1989, value: 31.612 },
          { date: 1990, value: 32.703 },
          { date: 1991, value: 34.711 },
          { date: 1992, value: 33.931 },
          { date: 1993, value: 34.946 },
          { date: 1994, value: 36.032 },
          { date: 1995, value: 36.844 },
          { date: 1996, value: 38.969 },
          { date: 1997, value: 40.685 },
          { date: 1998, value: 41.912 },
          { date: 1999, value: 42.887 },
          { date: 2000, value: 45.057 },
          { date: 2001, value: 45.866 },
          { date: 2002, value: 47.134 },
          { date: 2003, value: 47.935 },
          { date: 2004, value: 47.887 },
          { date: 2005, value: 47.674 },
          { date: 2006, value: 46.793 },
          { date: 2007, value: 47.597 },
          { date: 2008, value: 47.578 },
          { date: 2009, value: 48.661 },
          { date: 2010, value: 48.732 },
          { date: 2011, value: 50.003 },
          { date: 2012, value: 50.529 },
          { date: 2013, value: 50.878 },
          { date: 2014, value: 51.527 },
          { date: 2015, value: 52.38 },
          { date: 2016, value: 52.766 },
          { date: 2017, value: 53.7 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Social sciences and history"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 36.794 },
          { date: 1971, value: 36.166 },
          { date: 1972, value: 36.055 },
          { date: 1973, value: 36.369 },
          { date: 1974, value: 37.254 },
          { date: 1975, value: 37.742 },
          { date: 1976, value: 39.227 },
          { date: 1977, value: 40.49 },
          { date: 1978, value: 41.835 },
          { date: 1979, value: 43.555 },
          { date: 1980, value: 44.155 },
          { date: 1981, value: 44.64 },
          { date: 1982, value: 44.584 },
          { date: 1983, value: 44.114 },
          { date: 1984, value: 44.058 },
          { date: 1985, value: 43.815 },
          { date: 1986, value: 44.002 },
          { date: 1987, value: 43.881 },
          { date: 1988, value: 44.41 },
          { date: 1989, value: 44.202 },
          { date: 1990, value: 45.086 },
          { date: 1991, value: 45.511 },
          { date: 1992, value: 45.772 },
          { date: 1993, value: 46.135 },
          { date: 1994, value: 46.83 },
          { date: 1995, value: 47.918 },
          { date: 1996, value: 48.663 },
          { date: 1997, value: 49.186 },
          { date: 1998, value: 50.452 },
          { date: 1999, value: 51.171 },
          { date: 2000, value: 51.772 },
          { date: 2001, value: 51.706 },
          { date: 2002, value: 51.473 },
          { date: 2003, value: 50.894 },
          { date: 2004, value: 50.474 },
          { date: 2005, value: 49.963 },
          { date: 2006, value: 49.807 },
          { date: 2007, value: 49.289 },
          { date: 2008, value: 49.44 },
          { date: 2009, value: 49.413 },
          { date: 2010, value: 49.308 },
          { date: 2011, value: 49.237 },
          { date: 2012, value: 49.291 },
          { date: 2013, value: 49.025 },
          { date: 2014, value: 48.803 },
          { date: 2015, value: 49.574 },
          { date: 2016, value: 49.989 },
          { date: 2017, value: 50.222 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Mathematics and statistics"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 38.03 },
          { date: 1971, value: 39.046 },
          { date: 1972, value: 40.191 },
          { date: 1973, value: 40.878 },
          { date: 1974, value: 41.774 },
          { date: 1975, value: 40.721 },
          { date: 1976, value: 41.511 },
          { date: 1977, value: 41.14 },
          { date: 1978, value: 41.563 },
          { date: 1979, value: 42.327 },
          { date: 1980, value: 42.751 },
          { date: 1981, value: 43.158 },
          { date: 1982, value: 43.972 },
          { date: 1983, value: 44.295 },
          { date: 1984, value: 46.165 },
          { date: 1985, value: 46.514 },
          { date: 1986, value: 46.65 },
          { date: 1987, value: 46.486 },
          { date: 1988, value: 46.187 },
          { date: 1989, value: 46.245 },
          { date: 1990, value: 47.335 },
          { date: 1991, value: 47.0 },
          { date: 1992, value: 47.399 },
          { date: 1993, value: 46.411 },
          { date: 1994, value: 46.983 },
          { date: 1995, value: 46.141 },
          { date: 1996, value: 46.383 },
          { date: 1997, value: 47.036 },
          { date: 1998, value: 48.33 },
          { date: 1999, value: 47.845 },
          { date: 2000, value: 48.16 },
          { date: 2001, value: 47.004 },
          { date: 2002, value: 45.749 },
          { date: 2003, value: 45.951 },
          { date: 2004, value: 44.693 },
          { date: 2005, value: 45.047 },
          { date: 2006, value: 44.083 },
          { date: 2007, value: 44.109 },
          { date: 2008, value: 43.244 },
          { date: 2009, value: 43.309 },
          { date: 2010, value: 43.068 },
          { date: 2011, value: 43.092 },
          { date: 2012, value: 43.278 },
          { date: 2013, value: 42.964 },
          { date: 2014, value: 42.976 },
          { date: 2015, value: 42.532 },
          { date: 2016, value: 41.835 },
          { date: 2017, value: 42.425 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Physical sciences"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 13.792 },
          { date: 1971, value: 14.858 },
          { date: 1972, value: 14.836 },
          { date: 1973, value: 16.537 },
          { date: 1974, value: 18.218 },
          { date: 1975, value: 19.149 },
          { date: 1976, value: 20.002 },
          { date: 1977, value: 21.292 },
          { date: 1978, value: 22.507 },
          { date: 1979, value: 23.693 },
          { date: 1980, value: 24.582 },
          { date: 1981, value: 25.718 },
          { date: 1982, value: 27.32 },
          { date: 1983, value: 27.629 },
          { date: 1984, value: 27.977 },
          { date: 1985, value: 27.456 },
          { date: 1986, value: 28.389 },
          { date: 1987, value: 30.409 },
          { date: 1988, value: 29.733 },
          { date: 1989, value: 31.327 },
          { date: 1990, value: 31.615 },
          { date: 1991, value: 32.569 },
          { date: 1992, value: 32.565 },
          { date: 1993, value: 33.576 },
          { date: 1994, value: 34.763 },
          { date: 1995, value: 35.92 },
          { date: 1996, value: 37.302 },
          { date: 1997, value: 38.321 },
          { date: 1998, value: 39.727 },
          { date: 1999, value: 40.201 },
          { date: 2000, value: 41.037 },
          { date: 2001, value: 42.152 },
          { date: 2002, value: 41.096 },
          { date: 2003, value: 41.663 },
          { date: 2004, value: 42.08 },
          { date: 2005, value: 41.63 },
          { date: 2006, value: 40.803 },
          { date: 2007, value: 40.728 },
          { date: 2008, value: 40.659 },
          { date: 2009, value: 40.695 },
          { date: 2010, value: 40.182 },
          { date: 2011, value: 40.099 },
          { date: 2012, value: 38.894 },
          { date: 2013, value: 39.25 },
          { date: 2014, value: 38.486 },
          { date: 2015, value: 38.749 },
          { date: 2016, value: 39.68 },
          { date: 2017, value: 39.959 }
        ]
      }
    },
    {
      highlight: true,
      text: {
        className: "st14",
        value: "Computer and Information Science"
      },
      path: {
        yPoints: [
          { date: 1970, value: 13.567 },
          { date: 1971, value: 13.55 },
          { date: 1972, value: 14.869 },
          { date: 1973, value: 16.4 },
          { date: 1974, value: 18.935 },
          { date: 1975, value: 19.78 },
          { date: 1976, value: 23.895 },
          { date: 1977, value: 25.718 },
          { date: 1978, value: 28.065 },
          { date: 1979, value: 30.231 },
          { date: 1980, value: 32.53 },
          { date: 1981, value: 34.78 },
          { date: 1982, value: 36.328 },
          { date: 1983, value: 37.063 },
          { date: 1984, value: 36.767 },
          { date: 1985, value: 35.734 },
          { date: 1986, value: 34.714 },
          { date: 1987, value: 32.429 },
          { date: 1988, value: 30.814 },
          { date: 1989, value: 29.941 },
          { date: 1990, value: 29.365 },
          { date: 1991, value: 28.749 },
          { date: 1992, value: 28.194 },
          { date: 1993, value: 28.535 },
          { date: 1994, value: 28.511 },
          { date: 1995, value: 27.54 },
          { date: 1996, value: 27.122 },
          { date: 1997, value: 26.795 },
          { date: 1998, value: 27.045 },
          { date: 1999, value: 28.059 },
          { date: 2000, value: 27.681 },
          { date: 2001, value: 27.604 },
          { date: 2002, value: 26.958 },
          { date: 2003, value: 25.052 },
          { date: 2004, value: 22.15 },
          { date: 2005, value: 20.537 },
          { date: 2006, value: 18.56 },
          { date: 2007, value: 17.631 },
          { date: 2008, value: 17.843 },
          { date: 2009, value: 18.131 },
          { date: 2010, value: 17.621 },
          { date: 2011, value: 18.162 },
          { date: 2012, value: 17.831 },
          { date: 2013, value: 18.004 },
          { date: 2014, value: 18.027 },
          { date: 2015, value: 18.744 },
          { date: 2016, value: 19.117 },
          { date: 2017, value: 19.967 }
        ]
      }
    },
    {
      text: { className: "st14", value: "Business" },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 9.064 },
          { date: 1971, value: 9.503 },
          { date: 1972, value: 10.559 },
          { date: 1973, value: 12.805 },
          { date: 1974, value: 16.205 },
          { date: 1975, value: 19.686 },
          { date: 1976, value: 23.43 },
          { date: 1977, value: 27.163 },
          { date: 1978, value: 30.528 },
          { date: 1979, value: 33.622 },
          { date: 1980, value: 36.766 },
          { date: 1981, value: 39.266 },
          { date: 1982, value: 41.949 },
          { date: 1983, value: 43.542 },
          { date: 1984, value: 45.124 },
          { date: 1985, value: 45.748 },
          { date: 1986, value: 46.533 },
          { date: 1987, value: 46.69 },
          { date: 1988, value: 46.765 },
          { date: 1989, value: 46.782 },
          { date: 1990, value: 47.201 },
          { date: 1991, value: 47.224 },
          { date: 1992, value: 47.219 },
          { date: 1993, value: 47.639 },
          { date: 1994, value: 47.984 },
          { date: 1995, value: 48.573 },
          { date: 1996, value: 48.647 },
          { date: 1997, value: 48.561 },
          { date: 1998, value: 49.259 },
          { date: 1999, value: 49.81 },
          { date: 2000, value: 49.804 },
          { date: 2001, value: 50.275 },
          { date: 2002, value: 50.552 },
          { date: 2003, value: 50.346 },
          { date: 2004, value: 49.951 },
          { date: 2005, value: 49.792 },
          { date: 2006, value: 49.201 },
          { date: 2007, value: 49.012 },
          { date: 2008, value: 48.881 },
          { date: 2009, value: 48.824 },
          { date: 2010, value: 48.754 },
          { date: 2011, value: 48.213 },
          { date: 2012, value: 47.95 },
          { date: 2013, value: 47.375 },
          { date: 2014, value: 47.411 },
          { date: 2015, value: 47.185 },
          { date: 2016, value: 47.069 },
          { date: 2017, value: 46.961 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Engineering and engineering technologies"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 0.811 },
          { date: 1971, value: 1.038 },
          { date: 1972, value: 1.203 },
          { date: 1973, value: 1.589 },
          { date: 1974, value: 2.177 },
          { date: 1975, value: 3.197 },
          { date: 1976, value: 4.535 },
          { date: 1977, value: 6.762 },
          { date: 1978, value: 8.418 },
          { date: 1979, value: 9.382 },
          { date: 1980, value: 10.327 },
          { date: 1981, value: 11.567 },
          { date: 1982, value: 12.402 },
          { date: 1983, value: 13.069 },
          { date: 1984, value: 13.5 },
          { date: 1985, value: 13.459 },
          { date: 1986, value: 13.913 },
          { date: 1987, value: 14.004 },
          { date: 1988, value: 13.912 },
          { date: 1989, value: 14.089 },
          { date: 1990, value: 14.13 },
          { date: 1991, value: 14.032 },
          { date: 1992, value: 14.507 },
          { date: 1993, value: 14.906 },
          { date: 1994, value: 15.705 },
          { date: 1995, value: 16.199 },
          { date: 1996, value: 16.74 },
          { date: 1997, value: 17.003 },
          { date: 1998, value: 17.772 },
          { date: 1999, value: 18.623 },
          { date: 2000, value: 18.362 },
          { date: 2001, value: 18.999 },
          { date: 2002, value: 18.658 },
          { date: 2003, value: 18.799 },
          { date: 2004, value: 18.243 },
          { date: 2005, value: 17.861 },
          { date: 2006, value: 16.826 },
          { date: 2007, value: 16.823 },
          { date: 2008, value: 16.468 },
          { date: 2009, value: 16.788 },
          { date: 2010, value: 17.205 },
          { date: 2011, value: 17.526 },
          { date: 2012, value: 17.818 },
          { date: 2013, value: 18.385 },
          { date: 2014, value: 18.734 },
          { date: 2015, value: 19.67 },
          { date: 2016, value: 20.354 },
          { date: 2017, value: 20.978 }
        ]
      }
    },
    {
      text: { className: "st14", value: "Visual and performing arts" },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 59.676 },
          { date: 1971, value: 59.859 },
          { date: 1972, value: 60.388 },
          { date: 1973, value: 60.179 },
          { date: 1974, value: 61.915 },
          { date: 1975, value: 60.864 },
          { date: 1976, value: 61.319 },
          { date: 1977, value: 61.974 },
          { date: 1978, value: 62.459 },
          { date: 1979, value: 63.159 },
          { date: 1980, value: 63.443 },
          { date: 1981, value: 63.339 },
          { date: 1982, value: 63.082 },
          { date: 1983, value: 62.401 },
          { date: 1984, value: 62.079 },
          { date: 1985, value: 61.773 },
          { date: 1986, value: 62.086 },
          { date: 1987, value: 61.709 },
          { date: 1988, value: 61.744 },
          { date: 1989, value: 61.965 },
          { date: 1990, value: 62.639 },
          { date: 1991, value: 62.134 },
          { date: 1992, value: 61.035 },
          { date: 1993, value: 60.17 },
          { date: 1994, value: 59.374 },
          { date: 1995, value: 59.173 },
          { date: 1996, value: 58.611 },
          { date: 1997, value: 58.748 },
          { date: 1998, value: 59.097 },
          { date: 1999, value: 59.172 },
          { date: 2000, value: 59.17 },
          { date: 2001, value: 59.37 },
          { date: 2002, value: 60.938 },
          { date: 2003, value: 61.082 },
          { date: 2004, value: 61.269 },
          { date: 2005, value: 61.443 },
          { date: 2006, value: 61.58 },
          { date: 2007, value: 61.401 },
          { date: 2008, value: 60.676 },
          { date: 2009, value: 61.036 },
          { date: 2010, value: 61.313 },
          { date: 2011, value: 61.209 },
          { date: 2012, value: 61.08 },
          { date: 2013, value: 60.81 },
          { date: 2014, value: 60.326 },
          { date: 2015, value: 60.516 },
          { date: 2016, value: 61.328 },
          { date: 2017, value: 61.389 }
        ]
      }
    },
    {
      text: {
        className: "st14",
        value: "Architecture and related services"
      },
      path: {
        className: "st1",
        yPoints: [
          { date: 1970, value: 11.921 },
          { date: 1971, value: 12.003 },
          { date: 1972, value: 13.215 },
          { date: 1973, value: 14.792 },
          { date: 1974, value: 17.445 },
          { date: 1975, value: 19.134 },
          { date: 1976, value: 21.394 },
          { date: 1977, value: 23.741 },
          { date: 1978, value: 25.849 },
          { date: 1979, value: 27.77 },
          { date: 1980, value: 28.08 },
          { date: 1981, value: 29.842 },
          { date: 1982, value: 34.816 },
          { date: 1983, value: 35.826 },
          { date: 1984, value: 35.453 },
          { date: 1985, value: 36.133 },
          { date: 1986, value: 37.24 },
          { date: 1987, value: 38.731 },
          { date: 1988, value: 39.399 },
          { date: 1989, value: 39.097 },
          { date: 1990, value: 40.824 },
          { date: 1991, value: 33.68 },
          { date: 1992, value: 35.202 },
          { date: 1993, value: 35.777 },
          { date: 1994, value: 34.434 },
          { date: 1995, value: 36.063 },
          { date: 1996, value: 35.926 },
          { date: 1997, value: 35.102 },
          { date: 1998, value: 37.599 },
          { date: 1999, value: 38.632 },
          { date: 2000, value: 40.024 },
          { date: 2001, value: 40.69 },
          { date: 2002, value: 41.133 },
          { date: 2003, value: 42.759 },
          { date: 2004, value: 43.466 },
          { date: 2005, value: 43.1 },
          { date: 2006, value: 44.499 },
          { date: 2007, value: 43.083 },
          { date: 2008, value: 42.712 },
          { date: 2009, value: 43.349 },
          { date: 2010, value: 42.04 },
          { date: 2011, value: 42.778 },
          { date: 2012, value: 42.8 },
          { date: 2013, value: 43.447 },
          { date: 2014, value: 43.718 },
          { date: 2015, value: 45.008 },
          { date: 2016, value: 46.521 },
          { date: 2017, value: 47.141 }
        ]
      }
    }
  ]
};
