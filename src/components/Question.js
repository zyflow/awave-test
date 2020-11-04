export function Question() {
    const textString =         'Iaculis volutpat laoreet auctor aenean molestie placerat nunc phasellus in. Mauris eget tincidunt risus, cursus eu tortor, neque etiam. Nunc volutpat fusce odio sit ut. Neque ut phasellus blandit quis suspendisse.';

    return(
        <div className='question'>
            <p className='title'>Jenny Wilson</p>
            <p className='pretext'>(505) 555-0125  |  jenny.wilson@exampleemail.com</p>
            <p className='question-text'>{textString}</p>
        </div>
    );
}
