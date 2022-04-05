//Copy of https://www.murilio.com.br/posts/converter-string-em-slug-e-slug-em-string-usando-regex
export class SlugGenerateService {
    public static convertStringToSlug (string: string) {
        string = string.replace(/^\s+|\s+$/g, '')
        string = string.toLowerCase()

        const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
        const to = 'aaaaeeeeiiiioooouuuunc------';

        for (let i = 0, l = from.length; i < l; i++) {
          string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        }

        string = string.replace(/[^a-z0-9 -]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
      
        return string;
      }
}