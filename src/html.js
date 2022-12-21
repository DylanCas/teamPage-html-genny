function createHtml(managerCard, engineerCards, internCards) {
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamPage</title>
    <link rel="stylesheet" href="./dist/styles.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section class="manager">
            <section class="managerCard">
                <h2>Manager</h2>
                    ${managerCard}
            </section>
        </section>
        <section class="employees">
            <section class="engineers">
                <h2>Engineers</h2>
                <section class="engineerCards">
                    ${engineerCards}
                </section>
            </section>
            <section class="interns">
                <h2>Interns</h2>
                <section class="internCards">
                    ${internCards}
                </section>
            </section>
        </section>
    </main>
</body>
</html>`

return htmlTemplate
}

module.exports = createHtml