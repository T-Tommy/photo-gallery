const test = QUnit.test;

QUnit.module('Making Photocard Template');

function makeCardTemplate() {
    return `
    <li>
        <h2>Basically a unicorn</h2>
        <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
    </li>
    `;
}

test('Input image object and have function return card template', assert => {
    // Arrange
    const expected = /*html*/ `
    <li>
        <h2>Basically a unicorn</h2>
        <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
    </li>
    `;
    
    // Act
    const result = makeCardTemplate();

    // Assert
    assert.equal(result, expected);
});