const { createManagerCard, createEngineerCards, createInternCards } = require("./cards");

function createHtml(teammates) {
    const manager = teammates.filter(e => e.getRole() == 'Manager')[0];
    const managerCard = createManagerCard(manager);

    const engineers = teammates.filter(e => e.getRole() == "Engineer");
    const engineerCards = createEngineerCards(engineers);

    const interns = teammates.filter(e => e.getRole() == "Intern");
    const internCards = createInternCards(interns);

    return createHtmlFromParts(managerCard, engineerCards, internCards);
}`                                              `

function createHtmlFromParts(managerCard, engineerCards, internCards) {
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamPage</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section class="manager">
            <section class="managerCard">
                <h2>Manager</h2>
                    <!-- Manager Card -->
                    ${managerCard}
                    <!-- End of Manager Card -->
            </section>
        </section>
        <section class="employees">
            <section class="engineers">
                <h2>Engineers</h2>
                <section class="engineerCards">
                    <!-- Engineer Cards -->
                    ${engineerCards}
                    <!-- End of Engineer Cards -->
                </section>
            </section>
            <section class="interns">
                <h2>Interns</h2>
                <section class="internCards">
                    <!-- Intern Cards -->
                    ${internCards}
                    <!-- End of Intern Cards -->
                </section>
            </section>
        </section>
    </main>
</body>
</html>`

return htmlTemplate
}

module.exports = createHtml