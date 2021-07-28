"use strict";

export default function linkToSegmentFromMouseClick(
  mouseCoordinates,
  pointsCollection,
  segmentsCollecion
) {
  const delta = 750;
  const candidates = [];

  function checkMultipleVektors(vektor1, vektor2, delta) {
    const mustBeZero = vektor1.x * vektor2.y - vektor2.x * vektor1.y;
    if (Math.abs(mustBeZero) <= delta) return true;
    return false;
  }

  function checkSkalarMultipleVektors(vektor1, vektor2, delta) {
    const mustBeLessOrEqualZero = vektor1.x * vektor2.x + vektor1.y * vektor2.y;
    if (mustBeLessOrEqualZero <= 0 + delta * 2) return true;
    return false;
  }

  for (let segment in segmentsCollecion) {
    const currentSegment = segmentsCollecion[segment];
    const startPointOfSegment = pointsCollection[currentSegment.a];
    const endPointOfSegment = pointsCollection[currentSegment.b];
    const vektorSegment = {
      x: endPointOfSegment.x - startPointOfSegment.x,
      y: endPointOfSegment.y - startPointOfSegment.y,
    };
    const vektorToMousePoint = {
      x: mouseCoordinates.x - startPointOfSegment.x,
      y: mouseCoordinates.y - startPointOfSegment.y,
    };
    const vektorMousePointFirstSegment = {
      x: startPointOfSegment.x - mouseCoordinates.x,
      y: startPointOfSegment.y - mouseCoordinates.y,
    };
    const vektorMousePointSecondSegment = {
      x: endPointOfSegment.x - mouseCoordinates.x,
      y: endPointOfSegment.y - mouseCoordinates.y,
    };
    const checkPointOnLine = checkMultipleVektors(
      vektorSegment,
      vektorToMousePoint,
      delta
    );
    const checkPointOnSegment = checkSkalarMultipleVektors(
      vektorMousePointFirstSegment,
      vektorMousePointSecondSegment,
      delta
    );
    if (checkPointOnLine && checkPointOnSegment)
      candidates.push(currentSegment);
  }
  
  if (candidates.length === 0) {    
    return null;
  }
  if (candidates.length > 1) {
    return candidates[0];
  } else { 
    return candidates[0];
  }
}

