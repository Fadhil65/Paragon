describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io')

    cy.get('#chakra-modal--header-1 > svg').click();
    cy.contains('Daftar Jadi Member').click();
    cy.contains('Tidak, saya tidak memiliki kode Referral.').click();
    cy.contains('Lanjut').click();
    cy.get('[name="name"]').type('F');
    cy.get('[name="phone"]').type('509993412');
    cy.get('[name="password"]').type('Test12345!');
    cy.wait(2000);
    cy.get(':nth-child(3) > .chakra-button').click();
    cy.get('.styles_verification-user__R29YQ').click();
    cy.get('#pin-input-13-0').type('1');
    cy.get('#pin-input-13-1').type('2');
    cy.get('#pin-input-13-2').type('3');
    cy.get('#pin-input-13-3').type('4');
    cy.get('#pin-input-13-4').type('5');
    cy.get('#pin-input-13-5').type('6');
    cy.get('.css-15icixv > .chakra-button').click();
    cy.wait(8000)
    cy.contains('Isi Alamat').click();
  })
})