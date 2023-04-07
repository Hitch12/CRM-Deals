import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    Contacts: Array<Contact>,
    term: string,
    list_Contact: string
  ): Array<Contact> {
    if (term != '') {
      console.log(term);
      console.log(list_Contact);
      console.log(Contacts);
      return Contacts.filter((Contact) => {
        return (
          Contact.first_name.toLowerCase().includes(term.toLowerCase()) ||
          Contact.last_name.toLowerCase().includes(term.toLowerCase()) ||
          Contact.email.toLowerCase().includes(term.toLowerCase())
        );
      });
    }
    return Contacts;
  }
}
