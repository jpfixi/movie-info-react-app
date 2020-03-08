import React from 'react';
import {
  shallow,
} from 'enzyme';

import Search from './Search';


describe('Search Functionality', () => {
  it('should have search input field ', () => {
    const wrapper = shallow(<Search getMovieId={jest.fn()} movieId="657687" msg="" />);
    expect(wrapper.find('#search')).toHaveLength(1);
  });

  it('should  have a MovieDetails Section', () => {
    const wrapper = shallow(<Search getMovieId={jest.fn()} movieId="657687" msg="" />);
    expect(wrapper.find('.MovieDetails')).toHaveLength(1);
  });

  it('should  have search button', () => {
    const wrapper = shallow(<Search getMovieId={jest.fn()} movieId="657687" msg="" />);
    expect(wrapper.find('#searchBtn')).toHaveLength(1);
  });

  it('should  have error message section ', () => {
    const wrapper = shallow(<Search getMovieId={jest.fn()} movieId="657687" msg="" />);
    expect(wrapper.find('.errorSection')).toHaveLength(1);
  });
});
