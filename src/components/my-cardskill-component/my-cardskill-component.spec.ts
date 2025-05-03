import { newSpecPage } from '@stencil/core/testing';
import { MyCardSkillComponent } from './my-cardskill-component';

describe('my-cardskill-component.e2e', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyCardSkillComponent],
      html: '<my-cardskill-component.e2e></my-cardskill-component.e2e>',
    });
    expect(root).toEqualHtml(`
      <my-cardskill-component.e2e>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-cardskill-component.e2e>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyCardSkillComponent],
      html: `<my-cardskill-component.e2e first="Stencil" middle="'Don't call me a framework'" last="JS"></my-cardskill-component.e2e>`,
    });
    expect(root).toEqualHtml(`
      <my-cardskill-component.e2e first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-cardskill-component.e2e>
    `);
  });
});
