import {ordenarMasNueva, ordenarMasVieja,ordenarPuntuacionMayor,ordenarPuntuacionMenor,filtrarProductor} from "../src/data.js";

describe('ordenarMasNueva', () => {
  it('ordenarMasNueva', () => {
    const arrayFilms = [{"release_date": "1986"}, {"release_date": "1988"}, {"release_date": "1989"}]
    expect(ordenarMasNueva(arrayFilms)).toEqual([{"release_date": "1989"}, {"release_date": "1988"}, {"release_date": "1986"}]);
  });
});

describe('ordenarMasVieja', () => {
  it('ordenarMasVieja', () => {
    const arrayFilms = [{"release_date": "1988"}, {"release_date": "1986"}, {"release_date": "1989"}]
    expect(ordenarMasVieja(arrayFilms)).toMatchObject([{"release_date": "1986"}, {"release_date": "1988"}, {"release_date": "1989"}]);
  });
});

describe('ordenarPuntuacionMayor', () => {
  it('ordenarPuntuacionMayor', () => {
    const arrayFilms = [{"rt_score": "96"}, {"rt_score": "97"}, {"rt_score": "100"}]
    expect(ordenarPuntuacionMayor(arrayFilms)).toMatchObject([{"rt_score": "100"}, {"rt_score": "97"}, {"rt_score": "96"}]);
  });
});

describe('ordenarPuntuacionMenor', () => {
  it('ordenarPuntuacionMenor', () => {
    const arrayFilms = [{"rt_score": "97"}, {"rt_score": "100"}, {"rt_score": "96"}]
    console.log((ordenarPuntuacionMenor(arrayFilms)))
    expect(ordenarPuntuacionMenor(arrayFilms)).toMatchObject([{"rt_score": "96"}, {"rt_score": "97"}, {"rt_score": "100"}]);
  });
});

describe('filtrarProductor', () => {
  it('filtrarProductor', () => {
    const arrayFilms = [{"producer": "Hayao Miyazaki"}, {"producer": "Toshio Suzuki"}, {"producer": "Toru Hara"}]
    const nombreProductor="Hayao Miyazaki"
    expect(filtrarProductor(arrayFilms, nombreProductor)).toMatchObject([{"producer": "Hayao Miyazaki"}]);
  });
});
