export const squadFormatter = data => data.squad.reduce((previousValue, currentValue) => {
  return previousValue.hasOwnProperty(`${currentValue.position}s`) ? {
    ...previousValue,
    [`${currentValue.position}s`]: [...previousValue[`${currentValue.position}s`], currentValue]
  }
    : {
      ...previousValue,
      [`${currentValue.position}s`]: [currentValue]
    };
}, {})
