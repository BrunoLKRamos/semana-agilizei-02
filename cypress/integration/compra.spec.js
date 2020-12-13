/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.backgroundLogin()

        cy.visit('/')

        let nomeProduto = 'Faded Short Sleeve T-shirts'

        cy.contains(nomeProduto)
            .trigger('mouseover')
        
        cy.contains(nomeProduto)
            .parent() //h5
            .siblings('div.button-container')
            .children('a')
            .first() // add to cart
            .click()

        // Validando se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() // h2
            .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)
        
        cy.get(".button-container a[href$='controller=order']").click()

        cy.get(".cart_navigation a[href$='order&step=1']").click()

        // Validando se o endereço da entrega é igual o de cobrança
        //Asserção | Atributo | valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')

        cy.get('button[name=processAddress]').click()

        cy.get('[type=checkbox]#cgv').check()

        cy.get('button[name=processCarrier]').click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        cy.get('div.box').invoke('text').then((text) => {
            console.log(text.match(/[A-Z][A-Z]+/g)[1])

            // Escritar de um arquivo json com conteúdo do pedido
            // Caminho do arquivo (sempre a partir do root) | conteúdo do arquivo
            cy.writeFile('cypress/fixtures/pedido.json', {id: `${text.match(/[A-Z][A-Z]+/g)[1]}` })
        })

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

        cy.get(".cart_navigation a[href$='history']").click()

        // Leitura de arquivo
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get("tr.first_item .history_link a").should('contain.text', pedido.id)
        })

        

        // [x] 1. Capturar texto do box
        // [] 2. Filtrar o texto do box para extrair somendo o ID do pedido
        // [] 3. Armazenar o ID do pedido de alguma forma
        // [] 4. Obter o ID do pedido armazenado no passo 3 de alguma forma




    });
});



