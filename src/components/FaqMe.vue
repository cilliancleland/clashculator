
<template>
    <div>
        <h1>FAQ</h1>
        <ul>
            <li>
                <a href="#what">What is all this?</a>
            </li>
            <li>
                <a href="#print">How do I print?</a>
            </li>
            <li>
                <a href="#save">How do I save?</a>
            </li>
            <li>
                <a href="#sort">How do I sort?</a>
            </li>
            <li>
                <a href="#share">How do I share?</a>
            </li>
        </ul>
        <button
            title="Reset"
            v-on:click="$emit('no-faq')" >
                close
        </button>
        <a name="what" />
        <h2>What is all this?</h2>
        <p>
            This is a simple tool to help you build lists for the rather excellent
            miniatures game <a href="https://www.clashofspears.com">Clash of Spears</a>.
        </p>
        <p>
            It may still have some bugs. You can report any bugs on the facebook
            page for "The wargames Spot". Please tag "Cillian Cleland" if you do.
            Likewise feature requests and usability feedback is welcome.
        </p>
        <a name="print" />
        <h2>How do I print?</h2>
        <p>
            When a list is being edited you should see a print button in the top
            right of the screen.
        </p>
        <a name="save" />
        <h2>How do I save?</h2>
        <p>
            Clicking the Save button will save the army to your device.
            It is saved to local storage, a bit like a cookie, and won't
            be available anywhere else. Next time you koad the page, or
            after you reset, you should see the option to load this army.
        </p>
        <p>
            The army name defaults to Unknown soldiers. You can change
            this by typing over this name. Clicking the delete button will remove this army.
        </p>
        <a name="what" />
        <h2>How do I sort?</h2>
        <p>
            You can move a single row up or down by clicking the up arrow or down
            arrow in that row. To sort a list into book order you can click the double
            arrow icon at the left of the title row.
        </p>
        <a name="share" />
        <h2>How do I share?</h2>
        <p>
            Beneath the army list, but above the Trait Descriptions, there is a text
            box labelled 'Share this list'. Clicking here will copy a link to your clipboard.
            You can paste this link into an email or text to send it to someone or to share between
            devices.
        </p>
        <button
            title="Reset"
            v-on:click="$emit('no-faq')" >
                close
        </button>
    </div>
</template>

<script>
export default {
  name: 'FaqMe',
};
</script>

<style>

</style>
