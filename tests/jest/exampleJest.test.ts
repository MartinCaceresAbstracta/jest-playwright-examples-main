jest.setTimeout(60 * 2000);


describe('Buscar articulo',  () => {
  it.each([

    {articulo: 'Canon EOS 5D'},
    {articulo: 'MacBook'},
    {articulo: 'Apple Cinema 30"'}

  ])('Buscador $articulos', async ({articulo}) => {
  
    await page.goto("http://opencart.abstracta.us");
    await page.fill("input[name='search']", articulo);
    await page.click('.input-group-btn', { button: 'left' });
    await expect(page).toHaveSelector('div.caption h4 a', { state: "attached" })
    await expect(page).toMatchText('div.caption h4 a', articulo)

  });
  });