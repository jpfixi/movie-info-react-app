import React from 'react';
import PropTypes from 'prop-types';
import './CastAndCrew.css';

const CastAndCrew = (props) => {
  const { cast, crew } = props;

  if (!cast) return null;
  if (!crew) return null;

  const directors = crew.filter(c => c.department === 'Directing');
  const producers = crew.filter(c => c.job === 'Producer');
  const writers = crew.filter(c => c.job === 'Screenplay');
  const music = crew.filter(c => c.job === 'Original Music Composer');

  return (
    <section className="castAndCrew">
      <strong className="header">Actors:</strong>
      {cast.map(actor => (
        <p key={actor.cast_id}>{actor.name}</p>
      ))}
      <strong className="header">Directors:</strong>
      {directors.map(d => (
        <p key={d.id}>{d.name}</p>
      ))}
      <strong className="header">Producers:</strong>
      {producers.map(pdr => (
        <p key={pdr.id}>{pdr.name}</p>
      ))}
      <strong className="header">Writers:</strong>
      {writers.map(w => (
        <p key={w.id}>{w.name}</p>
      ))}
      <strong className="header">Music Director:</strong>
      {music.map(m => (
        <p key={m.id}>{m.name}</p>
      ))}
    </section>
  );
};

CastAndCrew.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  crew: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CastAndCrew;
